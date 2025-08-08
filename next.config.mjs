/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'rishi-chilveri.vercel.app',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
