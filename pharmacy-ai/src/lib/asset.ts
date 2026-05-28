import * as THREE from "three";

// Next basePath (e.g. "/segue") baked in at build via next.config.js `env`.
// next/link & static imports get prefixed automatically; manual fetch() and
// hardcoded asset URLs do NOT — use asset() for those.
export const BP = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Prefix an absolute app path ("/api/...", "/models/...") with the basePath. */
export const asset = (p: string): string =>
  BP && p.startsWith("/") ? BP + p : p;

// drei's useGLTF loads through THREE.DefaultLoadingManager. Rewrite absolute
// "/models/*" URLs so the 3D assets resolve under basePath through the proxy,
// instead of hitting the EduVerse server at the domain root. One hook covers
// every useGLTF/useGLTF.preload call without touching each site.
if (BP) {
  THREE.DefaultLoadingManager.setURLModifier((url) =>
    url.startsWith("/models/") ? BP + url : url
  );
}
