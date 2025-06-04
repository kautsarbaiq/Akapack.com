import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const portfolioItems = [
  {
    id: 1,
    title: "Keripik Singkong Mama Sari",
    category: "Standing Pouch",
    image: "/placeholder.svg?height=400&width=400",
    description: "Kemasan standing pouch dengan desain colorful untuk produk keripik singkong",
    client: "UKM Jakarta",
    year: "2024",
  },
  {
    id: 2,
    title: "Kopi Robusta Nusantara",
    category: "Flat Bottom Pouch",
    image: "/placeholder.svg?height=400&width=400",
    description: "Kemasan premium dengan valve untuk menjaga aroma kopi tetap fresh",
    client: "UKM Bandung",
    year: "2024",
  },
  {
    id: 3,
    title: "Bumbu Rendang Tradisional",
    category: "Sachet",
    image: "/placeholder.svg?height=400&width=400",
    description: "Kemasan sachet praktis untuk bumbu masak instant",
    client: "UKM Padang",
    year: "2024",
  },
  {
    id: 4,
    title: "Teh Herbal Sehat",
    category: "Ziplock Pouch",
    image: "/placeholder.svg?height=400&width=400",
    description: "Kemasan ziplock dengan window transparan untuk teh herbal",
    client: "UKM Yogyakarta",
    year: "2024",
  },
  {
    id: 5,
    title: "Jus Buah Segar",
    category: "Spout Pouch",
    image: "/placeholder.svg?height=400&width=400",
    description: "Kemasan spout pouch untuk minuman jus dengan desain fresh",
    client: "UKM Malang",
    year: "2024",
  },
  {
    id: 6,
    title: "Granola Premium",
    category: "Standing Pouch",
    image: "/placeholder.svg?height=400&width=400",
    description: "Kemasan standing pouch dengan zipper untuk granola premium",
    client: "UKM Bali",
    year: "2024",
  },
  {
    id: 7,
    title: "Sambal Pecel Madiun",
    category: "Retort Pouch",
    image: "/placeholder.svg?height=400&width=400",
    description: "Kemasan retort pouch tahan panas untuk sambal pecel siap saji",
    client: "UKM Madiun",
    year: "2023",
  },
  {
    id: 8,
    title: "Kacang Mete Madu",
    category: "Ziplock Pouch",
    image: "/placeholder.svg?height=400&width=400",
    description: "Kemasan ziplock dengan desain elegant untuk kacang mete premium",
    client: "UKM Lombok",
    year: "2023",
  },
  {
    id: 9,
    title: "Minyak Kelapa Murni",
    category: "Spout Pouch",
    image: "/placeholder.svg?height=400&width=400",
    description: "Kemasan spout pouch untuk minyak kelapa dengan cap anti tumpah",
    client: "UKM Sulawesi",
    year: "2023",
  },
]

const categories = [
  "Semua",
  "Standing Pouch",
  "Flat Bottom Pouch",
  "Sachet",
  "Ziplock Pouch",
  "Spout Pouch",
  "Retort Pouch",
]

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Galeri Portfolio Kemasan</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Lihat berbagai hasil karya kemasan custom yang telah kami buat untuk UKM di seluruh Indonesia. Setiap kemasan
          dirancang khusus sesuai dengan karakteristik brand dan produk klien.
        </p>
      </div>

      {/* Filter Categories */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={category === "Semua" ? "default" : "outline"}
            className="cursor-pointer hover:bg-orange-500 hover:text-white transition-colors px-4 py-2"
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {portfolioItems.map((item) => (
          <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <Badge className="bg-orange-500">{item.category}</Badge>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {item.category}
                  </Badge>
                  <span className="text-xs text-gray-500">{item.year}</span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>

                <p className="text-gray-600 text-sm mb-3">{item.description}</p>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-orange-600 font-medium">{item.client}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Stats Section */}
      <div className="bg-orange-50 rounded-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pencapaian Kami</h2>
          <p className="text-gray-600">Kepercayaan UKM Indonesia adalah motivasi terbesar kami</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
            <div className="text-gray-600">UKM Terlayani</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-500 mb-2">1000+</div>
            <div className="text-gray-600">Desain Kemasan</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
            <div className="text-gray-600">Kota di Indonesia</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-500 mb-2">99%</div>
            <div className="text-gray-600">Tingkat Kepuasan</div>
          </div>
        </div>
      </div>
    </div>
  )
}
