import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import NextTopLoader from "nextjs-toploader";
import { useEffect } from "react";
import { MouseTracker } from "@/components/MouseTracker";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harish Soni || React Dev",
  description:
    "I'm Harish Soni, a React Dev with the goal of making the software which must be scalables.",
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
