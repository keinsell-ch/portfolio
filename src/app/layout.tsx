import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // metadataBase: new URL('https://0x0zeus.github.io'),
  title: "Hayato Portfolio - Mobile Full-Stack Developer",
  description: "Hayato Suzuki's Personal Portfolio Website. Made with Next.js and Tailwind CSS.",
  keywords: "0x0zeus, 0x0zeus's portfolio, mobile, full stack, engineer, financial, engineer, Hayato, Hayato Suzuki",
  authors: [{ name: "Hayato Suzuki" }],
  creator: "Hayato Suzuki",
  publisher: "Hayato Suzuki",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    // url: "https://0x0zeus.github.io/",
    siteName: "Hayato Suzuki Personal Portfolio",
    title: "Hayato Portfolio - Mobile Full-Stack Developer",
    description: "Hayato Suzuki's Personal Portfolio Website. Made with Next.js and Tailwind CSS.",
    images: [
      {
        url: "/images/logos/bingrong.png",
        width: 570,
        height: 570,
        alt: "Hayato Suzuki",
      },
    ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Hayato Portfolio - Mobile Full-Stack Developer",
  //   description: "Hayato Suzuki's Personal Portfolio Website. Made with Next.js and Tailwind CSS.",
  //   images: ["/images/logos/Hayato.png"],
  // },
  icons: {
    icon: "/images/logos/bingrong.png",
    shortcut: "/images/logos/bingrong.png",
    apple: "/images/logos/bingrong.png",
  },
  // manifest: "/manifest.json",
  other: {
    "theme-color": "#E95420",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
