/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true
    },
    basePath: "/jwt-encoder-decoder",
    images: {
        unoptimized: true
    },
    compress: true
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true"
});

module.exports = withBundleAnalyzer(nextConfig);
