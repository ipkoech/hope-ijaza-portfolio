/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    trailingSlash: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: { unoptimized: true },
};

module.exports = nextConfig;
