/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'backendbatd.clinstitute.co.uk',
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
