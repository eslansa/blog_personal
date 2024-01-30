const { EnvironmentPlugin } = require('webpack');
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io"
            }
        ]
    },
    webpack(config) {
        config.plugins.push(new EnvironmentPlugin(['NEXT_PUBLIC_SANITY_DATASET']));

        return config;
    },
};

export default nextConfig;
