import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SolanaWalletProvider } from "@/components/wallet-provider";
import "@/styles/globals.css";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import BG from "@/components/bg";
import LenisProvider from "@/components/lenis-provider";

const fontSans = localFont({
  src: "../../assets/fonts/TASAOrbiterVF.woff2",
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "../../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

const fontLink = localFont({
  src: "../../assets/fonts/Bowman.ttf",
  variable: "--font-link",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} | ${siteConfig.description}`,
  description: siteConfig.description,
  keywords: [
    "Sonicrypt",
    "Blockchain",
    "Cryptocurrency",
    "Solana",
    "Phantom Wallet",
  ],
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  // OpenGraph metadata
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 2880,
        height: 1800,
        alt: siteConfig.name,
      },
    ],
    type: "website",
    locale: "en_US",
  },

  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    site: "@rds_agi",
    title: siteConfig.name,
    description: siteConfig.description,
    images: {
      url: siteConfig.ogImage,
      width: 2880,
      height: 1800,
      alt: siteConfig.name,
    },
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased overflow-x-hidden",
          fontSans.variable,
          fontHeading.variable,
          fontLink.variable,
        )}
        suppressHydrationWarning={true}
      >
        <BG />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SolanaWalletProvider>
            <LenisProvider>{children}</LenisProvider>
          </SolanaWalletProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
