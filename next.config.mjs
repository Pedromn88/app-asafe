/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['wallpapers.com', "raw.githubusercontent.com"],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ree.es',
                port: '',
                pathname: '/my-bucket/**',
            },
            {
                protocol: 'https',
                hostname: 'todofondos.net',
                port: '',
                pathname: '/my-bucket/**',
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/my-bucket/**',
            },
        ],
    },
};



export default nextConfig;


