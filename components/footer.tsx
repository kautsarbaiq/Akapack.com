import Link from "next/link"
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold">Akapack</span>
            </div>
            <p className="text-gray-300 mb-4">
              Solusi kemasan paperfoil custom berkualitas tinggi untuk UKM Indonesia. Wujudkan kemasan impian dengan
              harga terjangkau.
            </p>
            <div className="flex space-x-4">
              <Link href="https://wa.me/6281234567890" target="_blank" className="text-gray-300 hover:text-orange-500">
                <MessageCircle className="w-5 h-5" />
              </Link>
              <Link
                href="https://instagram.com/akapack"
                target="_blank"
                className="text-gray-300 hover:text-orange-500"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://facebook.com/akapack" target="_blank" className="text-gray-300 hover:text-orange-500">
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu Utama</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-orange-500">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/produk" className="text-gray-300 hover:text-orange-500">
                  Produk
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="text-gray-300 hover:text-orange-500">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="/berita" className="text-gray-300 hover:text-orange-500">
                  Berita
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="text-gray-300 hover:text-orange-500">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/pesan" className="text-gray-300 hover:text-orange-500">
                  Pesan Custom
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">Standing Pouch</span>
              </li>
              <li>
                <span className="text-gray-300">Sachet Custom</span>
              </li>
              <li>
                <span className="text-gray-300">Ziplock Pouch</span>
              </li>
              <li>
                <span className="text-gray-300">Flat Bottom Pouch</span>
              </li>
              <li>
                <span className="text-gray-300">Desain Custom</span>
              </li>
              <li>
                <span className="text-gray-300">Konsultasi Gratis</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  Jl. Kemasan Raya No. 123
                  <br />
                  Jakarta Selatan 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <span className="text-gray-300">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <span className="text-gray-300">info@akapack.com</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Ikuti Kami</h4>
              <div className="space-y-2">
                <Link
                  href="https://shopee.co.id/akapack"
                  target="_blank"
                  className="block text-gray-300 hover:text-orange-500"
                >
                  🛒 Shopee: @akapack
                </Link>
                <Link
                  href="https://instagram.com/akapack"
                  target="_blank"
                  className="block text-gray-300 hover:text-orange-500"
                >
                  📸 Instagram: @akapack
                </Link>
                <Link
                  href="https://facebook.com/akapack"
                  target="_blank"
                  className="block text-gray-300 hover:text-orange-500"
                >
                  👥 Facebook: Akapack Indonesia
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">© 2024 Akapack. Semua hak cipta dilindungi.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-300 hover:text-orange-500 text-sm">
                Kebijakan Privasi
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-orange-500 text-sm">
                Syarat & Ketentuan
              </Link>
              <Link href="/faq" className="text-gray-300 hover:text-orange-500 text-sm">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
