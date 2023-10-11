/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
    },
    output: "export",
};
const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
