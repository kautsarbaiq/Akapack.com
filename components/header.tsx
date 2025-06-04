"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Akapack</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-500 transition-colors">
              Beranda
            </Link>
            <Link href="/produk" className="text-gray-700 hover:text-orange-500 transition-colors">
              Produk
            </Link>
            <Link href="/galeri" className="text-gray-700 hover:text-orange-500 transition-colors">
              Galeri
            </Link>
            <Link href="/berita" className="text-gray-700 hover:text-orange-500 transition-colors">
              Berita
            </Link>
            <Link href="/tentang" className="text-gray-700 hover:text-orange-500 transition-colors">
              Tentang
            </Link>
          </nav>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm" asChild>
              <Link href="https://wa.me/6281234567890" target="_blank">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Link>
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600" size="sm" asChild>
              <Link href="/pesan">Pesan Sekarang</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-orange-500 transition-colors">
                Beranda
              </Link>
              <Link href="/produk" className="text-gray-700 hover:text-orange-500 transition-colors">
                Produk
              </Link>
              <Link href="/galeri" className="text-gray-700 hover:text-orange-500 transition-colors">
                Galeri
              </Link>
              <Link href="/berita" className="text-gray-700 hover:text-orange-500 transition-colors">
                Berita
              </Link>
              <Link href="/tentang" className="text-gray-700 hover:text-orange-500 transition-colors">
                Tentang
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://wa.me/6281234567890" target="_blank">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Link>
                </Button>
                <Button className="bg-orange-500 hover:bg-orange-600" size="sm" asChild>
                  <Link href="/pesan">Pesan Sekarang</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
