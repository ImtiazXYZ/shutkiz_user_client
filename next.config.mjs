// import createNextIntlPlugin from 'next-intl/plugin';

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// const withNextIntl = createNextIntlPlugin();

// export default withNextIntl(nextConfig);

import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, //uncomment in production
    //domains: ["localhost"], //uncomment in local
    domains: ["api-shutkiz.beemartbd.com"], //uncomment in production
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
