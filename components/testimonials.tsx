import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sari Dewi",
    business: "Keripik Singkong Mama Sari",
    location: "Jakarta",
    rating: 5,
    comment:
      "Kemasan dari Akapack benar-benar mengubah tampilan produk saya. Penjualan meningkat 40% setelah pakai kemasan baru!",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Budi Santoso",
    business: "Kopi Robusta Nusantara",
    location: "Bandung",
    rating: 5,
    comment: "Pelayanan sangat memuaskan, desain sesuai keinginan, dan harga terjangkau. Recommended banget untuk UKM!",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Maya Indira",
    business: "Bumbu Dapur Tradisional",
    location: "Surabaya",
    rating: 5,
    comment: "Kualitas kemasan premium tapi harganya ramah di kantong. Tim Akapack juga sangat responsif dan helpful.",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Ahmad Rizki",
    business: "Teh Herbal Sehat",
    location: "Yogyakarta",
    rating: 5,
    comment: "Sudah 2 tahun langganan di Akapack. Konsisten kualitasnya dan selalu tepat waktu pengirimannya.",
    image: "/placeholder.svg?height=60&width=60",
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kata Mereka Tentang Akapack</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Testimoni nyata dari para pengusaha UKM yang telah merasakan manfaat kemasan berkualitas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-orange-600 font-medium text-sm">{testimonial.business}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-lg p-8 shadow-sm max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Bergabunglah dengan 500+ UKM Sukses Lainnya</h3>
            <p className="text-gray-600 mb-6">
              Dapatkan kemasan berkualitas yang akan meningkatkan daya tarik dan penjualan produk Anda
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-2xl font-bold text-orange-500">4.9/5</div>
                <div className="text-sm text-gray-600">Rating Rata-rata</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-500">99%</div>
                <div className="text-sm text-gray-600">Repeat Order</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-500">500+</div>
                <div className="text-sm text-gray-600">UKM Terpercaya</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
