// ── Nhân vật người thật điều khiển được (Ready Player Me + skeletal anim) ──────
// Avatar RPM (cùng bộ xương với thư viện animation RPM → clip áp thẳng, KHÔNG
// cần retarget). Hỗ trợ: click-để-đi trên sàn + WASD, xoay mặt theo hướng đi,
// idle ⇄ walk ⇄ jog cross-fade, camera bám lưng (giữ orbit/zoom của người dùng),
// va chạm AABB với quầy/tủ/tủ lạnh, prompt tương tác khi lại gần, "cầm nắm" hộp
// thuốc gắn vào xương bàn tay phải. Tải asset từ ./models/pharmacy/avatar/.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const AVATAR_BASE = './models/pharmacy/avatar/';
const _loader = new GLTFLoader();
function loadGLB(url) {
  return new Promise((res, rej) => _loader.load(url, res, undefined, rej));
}

const CLIP_FILES = {
  idle:    'anim/idle.glb',
  walk:    'anim/walk.glb',
  jog:     'anim/jog.glb',
  gesture: 'anim/gesture.glb'
};

// RPM TPose quay mặt về +Z ở rotation.y = 0. Nếu sau kiểm tra trực quan thấy
// nhân vật đi lùi, đổi hằng số này thành Math.PI.
const MODEL_YAW_OFFSET = 0;

export async function createCharacter(ctx) {
  const {
    scene, camera, controls, canvas,
    colliders = [], bounds = null,
    spawn = { x: 0, z: 3.0, heading: Math.PI },
    avatarUrl = null,
    interactables = [],
    onPrompt = null
  } = ctx;

  // 1. Nạp avatar: ưu tiên URL RPM tuỳ biến (đẹp) → fallback TPose local (offline).
  let gltf = null;
  if (avatarUrl) {
    try { gltf = await loadGLB(avatarUrl); }
    catch (e) { console.warn('[character] avatar tuỳ biến lỗi, dùng local:', e); }
  }
  if (!gltf) gltf = await loadGLB(AVATAR_BASE + 'Masculine_TPose.glb');

  const model = gltf.scene;
  model.traverse(o => {
    if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; o.frustumCulled = false; }
  });
  // Chuẩn hoá chiều cao về ~1.7m + đặt chân chạm sàn y=0.
  let box = new THREE.Box3().setFromObject(model);
  const h = box.max.y - box.min.y;
  if (h > 0.1 && (h < 1.2 || h > 2.4)) {
    const s = 1.7 / h; model.scale.setScalar(s);
    box = new THREE.Box3().setFromObject(model);
  }
  model.position.y -= box.min.y;

  const root = new THREE.Group();
  root.add(model);
  root.position.set(spawn.x, 0, spawn.z);
  let heading = spawn.heading ?? Math.PI;
  root.rotation.y = heading;
  scene.add(root);

  // 2. Nạp các clip animation (anim-only, cùng tên xương với avatar).
  const clips = {};
  await Promise.all(Object.entries(CLIP_FILES).map(async ([k, url]) => {
    try { const g = await loadGLB(AVATAR_BASE + url); clips[k] = g.animations[0]; }
    catch (e) { console.warn('[character] clip lỗi', k, e); }
  }));

  // 3. Mixer + actions. idle/walk/jog blend bằng weight; gesture chạy 1 lần.
  const mixer = new THREE.AnimationMixer(model);
  const actions = {};
  for (const [k, clip] of Object.entries(clips)) {
    if (!clip) continue;
    const a = mixer.clipAction(clip);
    a.enabled = true; a.play();
    a.setEffectiveWeight(k === 'idle' ? 1 : 0);
    if (k === 'gesture') { a.setLoop(THREE.LoopOnce, 1); a.clampWhenFinished = true; }
    actions[k] = a;
  }
  const wTarget = { idle: 1, walk: 0, jog: 0, gesture: 0 };

  // Xương bàn tay phải → gắn hộp thuốc khi "cầm nắm".
  const rightHand = model.getObjectByName('RightHand') || model.getObjectByName('mixamorigRightHand');
  let carried = null;

  // ── Trạng thái điều khiển ──────────────────────────────────────────────────
  const pos = root.position;
  let moveTarget = null;
  let enabled = false;
  let gesturing = false;
  let nearInteractable = null;
  const keys = { w: false, a: false, s: false, d: false, shift: false };
  const RADIUS = 0.30, WALK_SPD = 1.35, JOG_SPD = 2.7, TURN_RATE = 9;
  const prevPos = pos.clone();

  // ── Raycast sàn cho click-để-đi ────────────────────────────────────────────
  const ray = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  const floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const hitPt = new THREE.Vector3();
  function screenToFloor(ev) {
    const r = canvas.getBoundingClientRect();
    ndc.x = ((ev.clientX - r.left) / r.width) * 2 - 1;
    ndc.y = -((ev.clientY - r.top) / r.height) * 2 + 1;
    ray.setFromCamera(ndc, camera);
    return ray.ray.intersectPlane(floorPlane, hitPt) ? hitPt.clone() : null;
  }

  // ── Va chạm: chặn nếu lọt vào AABB (đã nới theo bán kính) ──────────────────
  function blocked(x, z) {
    if (bounds && (x < bounds.minX || x > bounds.maxX || z < bounds.minZ || z > bounds.maxZ)) return true;
    for (const c of colliders) {
      if (x > c.minX - RADIUS && x < c.maxX + RADIUS && z > c.minZ - RADIUS && z < c.maxZ + RADIUS) return true;
    }
    return false;
  }
  function tryMove(dx, dz) {
    // Tách trục để trượt dọc tường thay vì kẹt cứng.
    if (!blocked(pos.x + dx, pos.z)) pos.x += dx;
    if (!blocked(pos.x, pos.z + dz)) pos.z += dz;
  }

  // ── Gesture + cầm nắm ──────────────────────────────────────────────────────
  mixer.addEventListener('finished', (e) => { if (e.action === actions.gesture) gesturing = false; });
  function doGesture() {
    if (!actions.gesture || gesturing) return;
    gesturing = true;
    actions.gesture.reset().setEffectiveWeight(1).play();
  }
  function toggleCarry() {
    if (!rightHand) return false;
    if (carried) { rightHand.remove(carried); carried.geometry.dispose(); carried.material.dispose(); carried = null; return false; }
    const g = new THREE.BoxGeometry(0.05, 0.09, 0.03);
    const m = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.55, metalness: 0.05 });
    const boxMesh = new THREE.Mesh(g, m);
    boxMesh.castShadow = true;
    boxMesh.position.set(0, -0.02, 0.05);
    boxMesh.rotation.set(0.35, 0, 0);
    rightHand.add(boxMesh); carried = boxMesh; return true;
  }

  // ── Input (chỉ tác dụng khi enabled) ───────────────────────────────────────
  function inTextField() {
    const a = document.activeElement;
    return a && (a.tagName === 'INPUT' || a.tagName === 'TEXTAREA' || a.isContentEditable);
  }
  function onKeyDown(e) {
    if (!enabled || inTextField()) return;
    const k = e.key.toLowerCase();
    if (k === 'w' || k === 'arrowup') keys.w = true;
    else if (k === 's' || k === 'arrowdown') keys.s = true;
    else if (k === 'a' || k === 'arrowleft') keys.a = true;
    else if (k === 'd' || k === 'arrowright') keys.d = true;
    else if (k === 'shift') { keys.shift = true; return; }
    else if (k === 'e') {
      doGesture();
      if (nearInteractable?.onActivate) nearInteractable.onActivate(); else toggleCarry();
      e.preventDefault(); return;
    } else return;
    moveTarget = null;        // bấm phím → huỷ đích click
    e.preventDefault();
  }
  function onKeyUp(e) {
    const k = e.key.toLowerCase();
    if (k === 'w' || k === 'arrowup') keys.w = false;
    else if (k === 's' || k === 'arrowdown') keys.s = false;
    else if (k === 'a' || k === 'arrowleft') keys.a = false;
    else if (k === 'd' || k === 'arrowright') keys.d = false;
    else if (k === 'shift') keys.shift = false;
  }
  function onCanvasClick(e) {
    if (!enabled) return;
    const p = screenToFloor(e);
    if (p) moveTarget = p;
  }
  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('keyup', onKeyUp);
  canvas.addEventListener('click', onCanvasClick);

  // ── Bật/tắt chế độ đi dạo ──────────────────────────────────────────────────
  function setEnabled(on) {
    enabled = on;
    if (on) {
      prevPos.copy(pos);
      const fwd = new THREE.Vector3(Math.sin(heading), 0, Math.cos(heading));
      camera.position.copy(pos.clone().addScaledVector(fwd, -3.0)).setY(1.85);
      controls.target.copy(pos.clone().setY(1.35));
      controls.minDistance = 1.2; controls.maxDistance = 9;
    }
    onPrompt?.(null);
  }

  // ── Update mỗi frame ───────────────────────────────────────────────────────
  const _fwd = new THREE.Vector3(), _right = new THREE.Vector3(), _dir = new THREE.Vector3(), _up = new THREE.Vector3(0, 1, 0);
  function update(dt) {
    mixer.update(dt);
    let vx = 0, vz = 0;
    if (enabled && !gesturing) {
      if (keys.w || keys.a || keys.s || keys.d) {
        camera.getWorldDirection(_fwd); _fwd.y = 0; _fwd.normalize();
        _right.crossVectors(_fwd, _up).normalize();
        _dir.set(0, 0, 0);
        if (keys.w) _dir.add(_fwd);
        if (keys.s) _dir.sub(_fwd);
        if (keys.d) _dir.add(_right);
        if (keys.a) _dir.sub(_right);
        if (_dir.lengthSq() > 1e-6) { _dir.normalize(); const sp = keys.shift ? JOG_SPD : WALK_SPD; vx = _dir.x * sp; vz = _dir.z * sp; }
      } else if (moveTarget) {
        const dx = moveTarget.x - pos.x, dz = moveTarget.z - pos.z, d = Math.hypot(dx, dz);
        if (d > 0.10) { vx = dx / d * WALK_SPD; vz = dz / d * WALK_SPD; } else moveTarget = null;
      }
    }
    const speed = Math.hypot(vx, vz);
    if (speed > 0.001) {
      tryMove(vx * dt, vz * dt);
      const want = Math.atan2(vx, vz) + MODEL_YAW_OFFSET;
      let diff = want - heading;
      while (diff > Math.PI) diff -= 2 * Math.PI;
      while (diff < -Math.PI) diff += 2 * Math.PI;
      heading += diff * Math.min(1, TURN_RATE * dt);
      root.rotation.y = heading;
    }

    // Trộn weight locomotion.
    const jogging = speed > WALK_SPD + 0.4;
    wTarget.idle = (speed < 0.05 && !gesturing) ? 1 : 0;
    wTarget.walk = (speed >= 0.05 && !jogging && !gesturing) ? 1 : 0;
    wTarget.jog = (jogging && !gesturing) ? 1 : 0;
    wTarget.gesture = gesturing ? 1 : 0;
    for (const k of ['idle', 'walk', 'jog', 'gesture']) {
      const a = actions[k]; if (!a) continue;
      const cur = a.getEffectiveWeight();
      a.setEffectiveWeight(cur + (wTarget[k] - cur) * Math.min(1, 12 * dt));
    }

    // Camera bám: dịch camera + target đúng bằng delta nhân vật (giữ orbit/zoom),
    // rồi kéo nhẹ target về ngực nhân vật cho mượt.
    if (enabled) {
      const ddx = pos.x - prevPos.x, ddy = pos.y - prevPos.y, ddz = pos.z - prevPos.z;
      camera.position.x += ddx; camera.position.y += ddy; camera.position.z += ddz;
      controls.target.x += ddx; controls.target.y += ddy; controls.target.z += ddz;
      controls.target.lerp(new THREE.Vector3(pos.x, 1.35, pos.z), 0.06);

      if (interactables.length) {
        let best = null, bd = Infinity;
        for (const it of interactables) { const d = pos.distanceTo(it.pos); if (d < bd) { bd = d; best = it; } }
        nearInteractable = (best && bd < 1.4) ? best : null;
        onPrompt?.(nearInteractable ? `Nhấn E — ${nearInteractable.label}` : null);
      }
    }
    prevPos.copy(pos);
  }

  function dispose() {
    window.removeEventListener('keydown', onKeyDown);
    window.removeEventListener('keyup', onKeyUp);
    canvas.removeEventListener('click', onCanvasClick);
    scene.remove(root);
  }

  return {
    root, update, setEnabled, dispose,
    isEnabled: () => enabled,
    toggleCarry, doGesture,
    setMoveTarget: (p) => { moveTarget = p; }
  };
}
