import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Akapack - Kemasan Custom Berkualitas untuk UKM Indonesia",
  description:
    "Solusi kemasan paperfoil custom terbaik untuk UKM Indonesia. Desain menarik, harga terjangkau, kualitas premium. Pesan sekarang!",
  keywords: "kemasan custom, paperfoil, UKM Indonesia, packaging, standing pouch, sachet, ziplock",
  authors: [{ name: "Akapack" }],
  creator: "Akapack",
  publisher: "Akapack",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://akapack.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Akapack - Kemasan Custom Berkualitas untuk UKM Indonesia",
    description: "Solusi kemasan paperfoil custom terbaik untuk UKM Indonesia",
    type: "website",
    locale: "id_ID",
    siteName: "Akapack",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Akapack - Kemasan Custom Berkualitas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akapack - Kemasan Custom Berkualitas untuk UKM Indonesia",
    description: "Solusi kemasan paperfoil custom terbaik untuk UKM Indonesia",
    images: ["/og-image.jpg"],
    creator: "@akapack",
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
  verification: {
    google: "google-site-verification-code", // Ganti dengan kode verifikasi Google Search Console Anda
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
