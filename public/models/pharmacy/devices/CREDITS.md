# Model 3D thiết bị/dụng cụ y tế — nguồn & giấy phép

Các model tải về từ Poly Pizza (kho Google Poly), dùng cho nhà thuốc 3D đào tạo.
Gắn theo TÊN thuốc trong `scene.js` (`DEVICE_MODELS`).

| File | Gắn cho | Nguồn | Tác giả | Giấy phép |
|------|---------|-------|---------|-----------|
| thermometer.glb | Nhiệt kế điện tử | https://poly.pizza/m/TlbiZ7hiBa | MilkAndBanana | CC0 (Public Domain) |
| gauze.glb | Gạc y tế | https://poly.pizza/m/1NDBCuuP_W4 | Poly by Google | CC-BY 3.0 |
| cotton.glb | Bông y tế | https://poly.pizza/m/tQa3uhSO5O | Poly Pizza (xem trang) | CC-BY 3.0 |

> CC-BY: bắt buộc ghi công tác giả (đã liệt kê ở trên).

## Chưa có model
- **Khẩu trang y tế** và **Máy đo huyết áp**: chưa tìm được model CC0/CC-BY tải tự động
  (chỉ có trên Sketchfab/TurboSquid cần đăng nhập). Hiện dùng hộp dự phòng.
  Khi có link .glb, thêm dòng vào `DEVICE_MODELS` trong `scene.js`, ví dụ:
  `{ match: /khẩu trang/i, file: 'mask.glb' }` và đặt file vào thư mục này.
