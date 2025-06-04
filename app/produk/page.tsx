import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    id: 1,
    name: "Standing Pouch",
    description:
      "Kemasan berdiri yang praktis dan menarik untuk berbagai produk makanan dan minuman. Dilengkapi dengan zipper untuk menjaga kesegaran produk.",
    image: "/placeholder.svg?height=400&width=400",
    priceRange: "Rp 500 - 2.000",
    sizes: ["100ml", "250ml", "500ml", "1L", "2L"],
    features: ["Food Grade", "Zipper Lock", "Custom Print", "Tear Notch"],
    applications: ["Kopi", "Teh", "Snack", "Bumbu", "Minuman Bubuk"],
  },
  {
    id: 2,
    name: "Sachet",
    description:
      "Kemasan sachet ekonomis untuk produk bubuk, bumbu, dan cairan. Ideal untuk sample produk atau kemasan sekali pakai.",
    image: "/placeholder.svg?height=400&width=400",
    priceRange: "Rp 200 - 800",
    sizes: ["5g", "10g", "20g", "50g", "100g"],
    features: ["Easy Tear", "Moisture Barrier", "Custom Size", "High Quality Print"],
    applications: ["Bumbu Masak", "Kopi Instan", "Shampo", "Sabun Cair", "Suplemen"],
  },
  {
    id: 3,
    name: "Ziplock Pouch",
    description:
      "Kemasan dengan penutup ziplock untuk menjaga kesegaran produk. Dapat dibuka tutup berulang kali dengan mudah.",
    image: "/placeholder.svg?height=400&width=400",
    priceRange: "Rp 800 - 3.000",
    sizes: ["50g", "100g", "250g", "500g", "1kg"],
    features: ["Resealable", "Transparent Window", "Strong Seal", "Custom Design"],
    applications: ["Keripik", "Kacang", "Permen", "Teh Celup", "Frozen Food"],
  },
  {
    id: 4,
    name: "Flat Bottom Pouch",
    description:
      "Kemasan dengan dasar datar untuk tampilan premium di rak. Memberikan stabilitas dan ruang branding yang lebih luas.",
    image: "/placeholder.svg?height=400&width=400",
    priceRange: "Rp 1.000 - 4.000",
    sizes: ["100g", "250g", "500g", "1kg", "2kg"],
    features: ["Premium Look", "Stable Standing", "Large Print Area", "Valve Option"],
    applications: ["Kopi Premium", "Teh Premium", "Granola", "Pet Food", "Nuts"],
  },
  {
    id: 5,
    name: "Spout Pouch",
    description: "Kemasan dengan spout untuk produk cair. Mudah dituang dan praktis untuk konsumen.",
    image: "/placeholder.svg?height=400&width=400",
    priceRange: "Rp 1.200 - 3.500",
    sizes: ["100ml", "200ml", "500ml", "1L", "1.5L"],
    features: ["Easy Pour", "Child Safe Cap", "Leak Proof", "Lightweight"],
    applications: ["Jus", "Susu", "Minyak Goreng", "Deterjen Cair", "Hand Sanitizer"],
  },
  {
    id: 6,
    name: "Retort Pouch",
    description: "Kemasan tahan panas untuk produk yang memerlukan sterilisasi. Cocok untuk makanan siap saji.",
    image: "/placeholder.svg?height=400&width=400",
    priceRange: "Rp 1.500 - 4.500",
    sizes: ["100g", "200g", "300g", "500g", "1kg"],
    features: ["Heat Resistant", "Long Shelf Life", "Microwave Safe", "Barrier Protection"],
    applications: ["Rendang Instan", "Sup Instan", "Baby Food", "Pet Food", "Ready to Eat"],
  },
]

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Katalog Produk Kemasan</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Pilihan lengkap kemasan paperfoil berkualitas tinggi untuk berbagai kebutuhan bisnis Anda. Semua produk dapat
          di-custom sesuai dengan brand dan kebutuhan spesifik Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Card key={product.id} className="group hover:shadow-xl transition-all duration-300">
            <CardContent className="p-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.priceRange}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>

                {/* Sizes */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Ukuran Tersedia:</h4>
                  <div className="flex flex-wrap gap-1">
                    {product.sizes.map((size) => (
                      <Badge key={size} variant="secondary" className="text-xs">
                        {size}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Fitur:</h4>
                  <div className="flex flex-wrap gap-1">
                    {product.features.map((feature) => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Cocok untuk:</h4>
                  <div className="flex flex-wrap gap-1">
                    {product.applications.map((app) => (
                      <span key={app} className="bg-orange-50 text-orange-700 px-2 py-1 rounded text-xs">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-orange-500 hover:bg-orange-600" asChild>
                  <Link href="/pesan">Pesan Sekarang</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-orange-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tidak Menemukan yang Anda Cari?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Kami juga menerima pesanan custom untuk jenis kemasan lainnya. Tim ahli kami siap membantu mewujudkan kemasan
          impian Anda.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600" asChild>
            <Link href="/pesan">Konsultasi Custom</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">
              Chat WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
