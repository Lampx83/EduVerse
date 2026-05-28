/** @type {import('next').NextConfig} */
// Mounted behind EduVerse's Express reverse proxy at a sub-path (default /segue).
// basePath is baked at build time → override via SEGUE_BASE_PATH for other prefixes
// (e.g. "/ps/segue" when EduVerse itself sits under limio.vn/ps).
const BASE_PATH = process.env.SEGUE_BASE_PATH || "/segue";

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["three"],
  // Tạo bundle standalone để Docker chạy bằng `node server.js` thay vì `npm start`
  output: "standalone",
  basePath: BASE_PATH,
  // Exposed to the client so fetch()/asset URLs can be prefixed (see src/lib/asset.ts).
  env: { NEXT_PUBLIC_BASE_PATH: BASE_PATH },
};
module.exports = nextConfig;
