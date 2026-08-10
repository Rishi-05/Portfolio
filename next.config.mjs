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
    // Any /api/* route not already handled by a Next.js route (e.g. /api/contact)
    // falls through to this rewrite, which sends it to the Flask serverless
    // function in /api/index.py. Locally that's a Flask dev server on :5328;
    // in production Vercel builds api/index.py into a function at /api/.
    async rewrites() {
        return [
            {
                source: '/api/chat',
                destination:
                    process.env.NODE_ENV === 'development'
                        ? 'http://127.0.0.1:5328/api/chat'
                        : '/api/',
            },
            {
                source: '/api/text-to-speech',
                destination:
                    process.env.NODE_ENV === 'development'
                        ? 'http://127.0.0.1:5328/api/text-to-speech'
                        : '/api/',
            },
            {
                source: '/api/start_session',
                destination:
                    process.env.NODE_ENV === 'development'
                        ? 'http://127.0.0.1:5328/api/start_session'
                        : '/api/',
            },
            {
                source: '/api/end_session',
                destination:
                    process.env.NODE_ENV === 'development'
                        ? 'http://127.0.0.1:5328/api/end_session'
                        : '/api/',
            },
        ];
    },
};

export default nextConfig;
