import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { Header } from "./components/header";
import { ScrollProgress } from "./components/scroll-progress";
import { CustomCursor } from "./components/custom-cursor";
import { LoadingScreen } from "./components/loading-screen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Ibrahim Khantach | Full Stack Developer Portfolio",
  description: "Full Stack Developer crafting elegant digital experiences with modern technologies. Specializing in Next.js, React, TypeScript, and Node.js.",
  keywords: ["Ibrahim Khantach", "Full Stack Developer", "Web Developer", "Next.js", "React", "TypeScript", "Portfolio", "Morocco", "Oujda"],
  authors: [{ name: "Ibrahim Khantach" }],
  creator: "Ibrahim Khantach",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ibrahimkhantach.com",
    title: "Ibrahim Khantach | Full Stack Developer",
    description: "Full Stack Developer crafting elegant digital experiences with modern technologies.",
    siteName: "Ibrahim Khantach Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ibrahim Khantach - Full Stack Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibrahim Khantach | Full Stack Developer",
    description: "Full Stack Developer crafting elegant digital experiences.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingScreen />
          <CustomCursor />
          <ScrollProgress />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
