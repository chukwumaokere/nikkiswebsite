/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    trailingSlash: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placeimg.com',
                pathname: '/**/**',
            },
            {
                protocol: 'https',
                hostname: 'liquipedia.net',
                pathname: '/commons/images/**',
            },
            {
                protocol: 'https',
                hostname: 'images.blz-contentstack.com',
                pathname: '/v3/assets/**',
            },
        ],
    },
};

module.exports = nextConfig;
