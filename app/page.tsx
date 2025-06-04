import Hero from "@/components/hero"
import ProductShowcase from "@/components/product-showcase"
import WhyAkapack from "@/components/why-akapack"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"
import NewsSection from "@/components/news-section"
import ChatWidget from "@/components/chat-widget"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProductShowcase />
      <WhyAkapack />
      <HowItWorks />
      <Testimonials />
      <NewsSection />
      <ChatWidget />
    </main>
  )
}
