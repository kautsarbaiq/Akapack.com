import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const products = [
  {
    id: 1,
    name: "Standing Pouch",
    description: "Kemasan berdiri yang praktis dan menarik untuk berbagai produk makanan dan minuman",
    image: "/placeholder.svg?height=300&width=300",
    priceRange: "Rp 500 - 2.000",
    sizes: ["100ml", "250ml", "500ml", "1L"],
  },
  {
    id: 2,
    name: "Sachet",
    description: "Kemasan sachet ekonomis untuk produk bubuk, bumbu, dan cairan",
    image: "/placeholder.svg?height=300&width=300",
    priceRange: "Rp 200 - 800",
    sizes: ["5g", "10g", "20g", "50g"],
  },
  {
    id: 3,
    name: "Ziplock Pouch",
    description: "Kemasan dengan penutup ziplock untuk menjaga kesegaran produk",
    image: "/placeholder.svg?height=300&width=300",
    priceRange: "Rp 800 - 3.000",
    sizes: ["50g", "100g", "250g", "500g"],
  },
  {
    id: 4,
    name: "Flat Bottom Pouch",
    description: "Kemasan dengan dasar datar untuk tampilan premium di rak",
    image: "/placeholder.svg?height=300&width=300",
    priceRange: "Rp 1.000 - 4.000",
    sizes: ["100g", "250g", "500g", "1kg"],
  },
]

export default function ProductShowcase() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Katalog Produk Kemasan</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pilihan lengkap kemasan paperfoil berkualitas tinggi untuk berbagai kebutuhan bisnis Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-orange-500 text-white px-2 py-1 rounded text-sm font-medium">
                    {product.priceRange}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-1">Ukuran tersedia:</div>
                    <div className="flex flex-wrap gap-1">
                      {product.sizes.map((size) => (
                        <span key={size} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600" size="sm" asChild>
                    <Link href="/pesan">Pesan Sekarang</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/produk">Lihat Semua Produk</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
