import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const articles = [
  {
    id: 1,
    title: "Tips Memilih Kemasan yang Tepat untuk Produk Makanan",
    excerpt: "Panduan lengkap memilih jenis kemasan yang sesuai dengan karakteristik produk makanan Anda...",
    image: "/placeholder.svg?height=200&width=300",
    date: "2024-01-15",
    category: "Tips & Trik",
  },
  {
    id: 2,
    title: "Kisah Sukses UKM Keripik Singkong dengan Kemasan Baru",
    excerpt: "Bagaimana kemasan yang menarik membantu UKM keripik singkong meningkatkan penjualan hingga 300%...",
    image: "/placeholder.svg?height=200&width=300",
    date: "2024-01-10",
    category: "Success Story",
  },
  {
    id: 3,
    title: "Tren Kemasan Ramah Lingkungan untuk UKM Modern",
    excerpt: "Mengenal berbagai pilihan kemasan eco-friendly yang cocok untuk bisnis berkelanjutan...",
    image: "/placeholder.svg?height=200&width=300",
    date: "2024-01-05",
    category: "Trend",
  },
]

export default function NewsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Berita & Tips Kemasan</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dapatkan insight terbaru tentang dunia kemasan dan tips sukses untuk UKM
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {articles.map((article) => (
            <Card key={article.id} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium">
                    {article.category}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(article.date).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                  <Link
                    href={`/berita/${article.id}`}
                    className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium text-sm"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/berita">Lihat Semua Artikel</Link>
          </Button>
        </div>

        {/* Educational Section */}
        <div className="mt-16 bg-orange-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Belajar Kemasan</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tingkatkan pengetahuan Anda tentang kemasan dengan panduan lengkap dari para ahli
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-500 font-bold text-lg">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Dasar-dasar Kemasan</h4>
              <p className="text-gray-600 text-sm">Pelajari fundamental kemasan untuk produk UKM</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-500 font-bold text-lg">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Desain & Branding</h4>
              <p className="text-gray-600 text-sm">Tips menciptakan desain kemasan yang menarik</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-500 font-bold text-lg">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Strategi Pemasaran</h4>
              <p className="text-gray-600 text-sm">Manfaatkan kemasan untuk meningkatkan penjualan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
