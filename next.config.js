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
            {
                protocol: 'https',
                hostname: 'static.wikia.nocookie.net',
                pathname: '/overwatch_gamepedia/images/**',
            },
            {
                protocol: 'https',
                hostname: 'arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com',
                pathname: '/public/**',
            },
            {
                protocol: 'https',
                hostname: 'assets2.razerzone.com',
                pathname: '/images/**',
            },
            {
                protocol: 'https',
                hostname: 'assets2.razerzone.com',
                pathname: '/overwatch_gamepedia/images/**',
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
                pathname: '/wikipedia/en/**',
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
                pathname: '/wikipedia/commons/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.shopify.com',
                pathname: '/files/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.shopify.com',
                pathname: '/s/files/**',
            },
            {
                protocol: 'https',
                hostname: 'i.ytimg.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.gameinformer.com',
                pathname: '/**',
            },
        ],
    },
};

module.exports = nextConfig;
