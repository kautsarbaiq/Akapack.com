import { CheckCircle, Shield, Clock, Palette, HeadphonesIcon, Truck } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Kualitas Terjamin",
    description: "Material food grade berkualitas tinggi dengan sertifikasi internasional",
  },
  {
    icon: Palette,
    title: "Desain Custom",
    description: "Tim desainer profesional siap membantu mewujudkan ide kemasan impian Anda",
  },
  {
    icon: Clock,
    title: "Pengerjaan Cepat",
    description: "Proses produksi efisien dengan waktu pengerjaan 3-7 hari kerja",
  },
  {
    icon: HeadphonesIcon,
    title: "Layanan 24/7",
    description: "Customer service responsif siap membantu Anda kapan saja",
  },
  {
    icon: Truck,
    title: "Pengiriman Aman",
    description: "Jangkauan pengiriman ke seluruh Indonesia dengan packaging aman",
  },
  {
    icon: CheckCircle,
    title: "Harga Terjangkau",
    description: "Solusi kemasan premium dengan harga yang ramah untuk UKM",
  },
]

export default function WhyAkapack() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mengapa Memilih Akapack?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami memahami kebutuhan UKM Indonesia dan berkomitmen memberikan solusi kemasan terbaik
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 rounded-lg p-3 mr-4">
                  <feature.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg p-8 shadow-sm">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sudah Dipercaya 500+ UKM di Indonesia</h3>
            <p className="text-gray-600 mb-6">
              Bergabunglah dengan ribuan UKM yang telah merasakan manfaat kemasan berkualitas dari Akapack
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-orange-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-orange-500 mb-1">99%</div>
                <div className="text-sm text-gray-600">Tingkat Kepuasan</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-orange-500 mb-1">24 Jam</div>
                <div className="text-sm text-gray-600">Respon Time</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-orange-500 mb-1">100%</div>
                <div className="text-sm text-gray-600">Garansi Kualitas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
