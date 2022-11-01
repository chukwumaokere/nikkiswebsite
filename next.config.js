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
                port: '',
                pathname: '/**/**',
            },
            {
                protocol: 'https',
                hostname: 'liquipedia.net',
                port: '',
                pathname: '/commons/images/**',
            },
            {
                protocol: 'https',
                hostname: 'images.blz-contentstack.com',
                port: '',
                pathname: '/v3/assets/**',
            },
        ],
    },
};

module.exports = nextConfig;
