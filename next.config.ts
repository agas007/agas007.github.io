import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true
  },
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/maksi",
        destination: "https://drive.google.com/drive/folders/1TlloOGWToUKkAnRA7SS8sB_fg1a3yb-P",
        permanent: false,
      },
      {
        source: "/uts",
        destination: "https://drive.google.com/drive/folders/1TlloOGWToUKkAnRA7SS8sB_fg1a3yb-P",
        permanent: false,
      },
      {
        source: "/gkmr",
        destination: "https://docs.google.com/document/d/12_IhbsZHh984tVTF9Ak3RtqJ529yE3iJX7Tbw3dUOcI/edit?usp=drivesdk",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
