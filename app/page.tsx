import Hero from "@/components/hero"
import ProductShowcase from "@/components/product-showcase"
import WhyAkapack from "@/components/why-akapack"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"
import NewsSection from "@/components/news-section"
import ChatWidget from "@/components/chat-widget"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Akapack - Kemasan Custom Berkualitas untuk UKM Indonesia",
  description: "Solusi kemasan paperfoil custom terbaik untuk UKM Indonesia. Desain menarik, harga terjangkau, kualitas premium. Pesan sekarang!",
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section aria-label="Hero Section">
        <Hero />
      </section>
      
      <section aria-label="Produk Unggulan" id="produk">
        <ProductShowcase />
      </section>
      
      <section aria-label="Mengapa Memilih Akapack" id="keunggulan">
        <WhyAkapack />
      </section>
      
      <section aria-label="Cara Kerja" id="cara-kerja">
        <HowItWorks />
      </section>
      
      <section aria-label="Testimoni Pelanggan" id="testimoni">
        <Testimonials />
      </section>
      
      <section aria-label="Berita Terkini" id="berita">
        <NewsSection />
      </section>
      
      <ChatWidget />
    </main>
  )
}
