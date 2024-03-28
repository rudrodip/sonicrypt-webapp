import type { Metadata, Viewport } from "next";
import { Lato, Poppins } from "next/font/google";
import { SolanaWalletProvider } from "@/components/wallet-provider";
import "@/styles/globals.css";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const fontSans = Lato({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
});

const fontHeading = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
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
        width: 1200,
        height: 630,
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
      width: 1200,
      height: 630,
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
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SolanaWalletProvider>
            {children}
          </SolanaWalletProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
