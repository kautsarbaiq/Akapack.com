"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Package, Users, Award } from "lucide-react"

const bannerImages = [
  {
    src: "/placeholder.svg?height=600&width=1200",
    title: "Kemasan Premium untuk Brand Anda",
    subtitle: "Tingkatkan daya tarik produk dengan kemasan custom berkualitas tinggi",
  },
  {
    src: "/placeholder.svg?height=600&width=1200",
    title: "Solusi Kemasan Terpercaya UKM",
    subtitle: "Dari desain hingga produksi, kami siap membantu kesuksesan bisnis Anda",
  },
  {
    src: "/placeholder.svg?height=600&width=1200",
    title: "Harga Terjangkau, Kualitas Terjamin",
    subtitle: "Dapatkan kemasan profesional dengan harga yang ramah untuk UKM",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length)
  }

  return (
    <section className="relative">
      {/* Hero Banner */}
      <div className="relative h-[500px] md:h-[600px] overflow-hidden">
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{image.title}</h1>
                <p className="text-lg md:text-xl mb-8 opacity-90">{image.subtitle}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600" asChild>
                    <Link href="/pesan">Pesan Custom Sekarang</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-gray-900"
                    asChild
                  >
                    <Link href="/produk">Lihat Katalog</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-orange-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-3">
                <Package className="w-8 h-8 text-orange-500" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">1000+</div>
              <div className="text-gray-600">Produk Terjual</div>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <Users className="w-8 h-8 text-orange-500" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">500+</div>
              <div className="text-gray-600">UKM Terpercaya</div>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <Star className="w-8 h-8 text-orange-500" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">4.9</div>
              <div className="text-gray-600">Rating Kepuasan</div>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <Award className="w-8 h-8 text-orange-500" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">3+</div>
              <div className="text-gray-600">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
