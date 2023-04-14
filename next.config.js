/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        unoptimized: true,
    },
    output: "export",
    distDir: "../personal-site-next-out",
};
const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
