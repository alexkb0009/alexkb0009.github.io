/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        unoptimized: true,
    },
    output: "export",
};
const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
