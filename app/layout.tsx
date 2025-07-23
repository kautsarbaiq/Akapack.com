import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Akapack - Solusi Kemasan Custom & Mesin Pengemasan untuk UKM Indonesia",
    template: "%s | Akapack"
  },
  description:
    "Penyedia terpercaya kemasan custom, mesin pengemasan otomatis, dan layanan percetakan untuk UKM Indonesia. Solusi B2B berkualitas tinggi, harga kompetitif, dan layanan profesional.",
  keywords: [
    "kemasan custom indonesia",
    "mesin pengemasan otomatis",
    "standing pouch custom",
    "mesin pengisi cairan",
    "kemasan paperfoil",
    "solusi kemasan UKM",
    "mesin packaging indonesia",
    "percetakan kemasan",
    "supplier kemasan B2B",
    "mesin sealing otomatis"
  ].join(", "),
  authors: [{ name: "Akapack Indonesia", url: "https://akapack.com" }],
  creator: "Akapack Indonesia",
  publisher: "Akapack Indonesia",
  category: "Business & Industrial",
  classification: "Manufacturing & Packaging Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://akapack.com'),
  alternates: {
    canonical: '/',
    languages: {
      'id-ID': '/',
    },
  },
  openGraph: {
    title: "Akapack - Solusi Kemasan Custom & Mesin Pengemasan untuk UKM Indonesia",
    description: "Penyedia terpercaya kemasan custom, mesin pengemasan otomatis, dan layanan percetakan untuk UKM Indonesia",
    type: "website",
    locale: "id_ID",
    siteName: "Akapack Indonesia",
    images: [
      {
        url: "/images/akapack-hero-packaging-solutions.webp",
        width: 1200,
        height: 630,
        alt: "Akapack - Solusi Kemasan Custom dan Mesin Pengemasan Terpercaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akapack - Solusi Kemasan Custom & Mesin Pengemasan untuk UKM Indonesia",
    description: "Penyedia terpercaya kemasan custom, mesin pengemasan otomatis, dan layanan percetakan untuk UKM Indonesia",
    images: ["/images/akapack-hero-packaging-solutions.webp"],
    creator: "@akapack_id",
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
  other: {
    'google-site-verification': 'your-google-verification-code',
    'msvalidate.01': 'your-bing-verification-code',
  }
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
        <meta name="theme-color" content="#2563eb" />
        <meta name="geo.region" content="ID" />
        <meta name="geo.country" content="Indonesia" />
        <meta name="ICBM" content="-6.2088, 106.8456" />
        <meta name="geo.position" content="-6.2088;106.8456" />
        <meta name="geo.placename" content="Jakarta, Indonesia" />
        
        {/* Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Akapack Indonesia",
              "url": "https://akapack.com",
              "logo": "https://akapack.com/images/akapack-logo.webp",
              "description": "Penyedia terpercaya kemasan custom, mesin pengemasan otomatis, dan layanan percetakan untuk UKM Indonesia",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "ID",
                "addressRegion": "Jakarta"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+62-xxx-xxxx-xxxx",
                "contactType": "customer service",
                "availableLanguage": ["Indonesian", "English"]
              },
              "sameAs": [
                "https://www.instagram.com/akapack_id",
                "https://www.linkedin.com/company/akapack"
              ]
            })
          }}
        />
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://akapack.com" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
