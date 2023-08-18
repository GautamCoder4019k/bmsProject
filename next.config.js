/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => [
        {
          source: "/public/myfile.html",
          destination: "/src/app/api/myfile.js",
        },
      ],
}



module.exports = nextConfig
