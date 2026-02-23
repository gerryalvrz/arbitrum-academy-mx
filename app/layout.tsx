import React from "react";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-arbitrum',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Arbitrum Academy México',
  description: 'Arbitrum Academy México: el hub para builders y comunidad.',
  icons: {
    icon: '/1225_Arbitrum_Logomark_all/1225_Arbitrum_Logomark_FullColor_ClearSpace.png',
    shortcut: '/1225_Arbitrum_Logomark_all/1225_Arbitrum_Logomark_FullColor_ClearSpace.png',
    apple: '/1225_Arbitrum_Logomark_all/1225_Arbitrum_Logomark_FullColor_ClearSpace.png',
  },
  openGraph: {
    title: 'Arbitrum Academy Mexico',
    description: 'Arbitrum Academy Mexico: el hub para builders y comunidad.',
    type: 'website',
    url: 'https://arbitrum-academy-mx.local',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arbitrum Academy Mexico',
    description: 'Arbitrum Academy Mexico: el hub para builders y comunidad.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        
      </head>
      <body className={`${plusJakarta.variable} min-h-screen antialiased bg-celo-bg text-celo-fg font-sans`}>
        <ThemeProvider>
          <Providers>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1 overflow-x-hidden pt-8 sm:pt-10 lg:pt-12">{children}</main>
              <Footer />
            </div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
