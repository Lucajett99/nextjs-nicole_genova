/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Gestisci correttamente gli slash finali
  trailingSlash: false,
  
  // Forza HTTPS e imposta header di sicurezza
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          }
        ]
      }
    ];
  },
};

module.exports = nextConfig;