import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import NextTopLoader from "nextjs-toploader";
import { useEffect } from "react";
import { MouseTracker } from "@/components/MouseTracker";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harish Soni",
  description:
    "Passionate Engineer specializing in the MERN stack, with a proven track record of developing robust and dynamic web applications. By seamlessly integrating MongoDB, Express.js, React.js, and Node.js.",
  openGraph: {
    images: 'https://raw.githubusercontent.com/harish9312/portfolio_2.0/main/src/app/ogImage.png'
  },
  keywords: "MERN stack development, MongoDB, Express.js, React.js, Node.js, web application development, Tech Lead, full-stack development, scalable web solutions, user-centric design, innovative web development, cutting-edge technologies, digital initiatives, portfolio showcase, code craftsmanship, custom web solutions, responsive web design, frontend development, backend development, software engineering excellence"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics gaId="G-QMRS7YVE57" />
        <script src="https://raw.githubusercontent.com/harish9312/my-portfolio/master/public/particles.js"></script>
      </head>
      <body className={inter.className}>
        <NextTopLoader color="#ffffff" height={3} />
        <MouseTracker />
        {children}
      </body>
    </html>
  );
}
