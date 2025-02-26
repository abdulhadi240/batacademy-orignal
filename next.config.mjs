/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'batd.website12.help',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'batdacademy.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'img.freepik.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
          },
        ],
      },
      redirects: async () => {
        return [
            {
                source: '/',
                destination: '/en',
                permanent: true,
            },
            
        ];
    },
};

export default nextConfig;
