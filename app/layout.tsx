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
  openGraph: {
    title: "Akapack - Kemasan Custom Berkualitas untuk UKM Indonesia",
    description: "Solusi kemasan paperfoil custom terbaik untuk UKM Indonesia",
    type: "website",
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
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
