/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // 実画像は public/images/ に同名ファイルを配置すれば反映される。
    // 外部CDNを使う場合はここに remotePatterns を追加する。
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
