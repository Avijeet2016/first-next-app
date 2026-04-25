/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // https://images.unsplash.com/photo-1776445602573-0cc8680b4d0a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "**",
        search: "",
      },
      // https://i.ibb.co.com/fYF1d5xx/duplesis.webp
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
        port: "",
        pathname: "**",
        search: "",
      },
      // "image_link": "https://res.cloudinary.com/dj493l0jy/image/upload/v1773986441/foods/672baf2f-8c93-4d9f-a255-f097b77fc8dc.png"
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
