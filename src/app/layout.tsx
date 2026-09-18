import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agas | Finance, Tax & Software",
  description:
    "Agastya Arnanda Primawan — finance and tax professional building practical software, automation, and internal systems.",
  metadataBase: new URL("https://agas007.github.io"),
  openGraph: {
    title: "Agas | Finance, Tax & Software",
    description:
      "Finance and tax professional building practical software, automation, and internal systems.",
    url: "https://agas007.github.io",
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
      <body className={`${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
