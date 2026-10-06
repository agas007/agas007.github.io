import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agas | Finance, Tax & Software",
  description:
    "Agastya Arnanda Primawan — finance and tax professional building practical software, automation, and internal systems.",
  metadataBase: new URL("https://agas.my.id"),
  openGraph: {
    title: "Agas | Finance, Tax & Software",
    description:
      "Finance and tax professional building practical software, automation, and internal systems.",
    url: "https://agas.my.id",
    siteName: "Agas",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
