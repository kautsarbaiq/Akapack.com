import { MessageSquare, Palette, PrinterIcon, Truck } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "Konsultasi",
    description: "Hubungi kami melalui WhatsApp atau form pemesanan untuk diskusi kebutuhan kemasan Anda",
  },
  {
    icon: Palette,
    title: "Desain",
    description: "Tim desainer kami akan membuat mockup kemasan sesuai dengan brand dan preferensi Anda",
  },
  {
    icon: PrinterIcon,
    title: "Produksi",
    description: "Setelah desain disetujui, kami mulai proses produksi dengan mesin modern dan berkualitas",
  },
  {
    icon: Truck,
    title: "Pengiriman",
    description: "Kemasan siap dikirim ke alamat Anda dengan packaging aman dan asuransi pengiriman",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cara Kerja Kami</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proses mudah dan transparan dari konsultasi hingga produk sampai di tangan Anda
          </p>
        </div>

        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="flex items-center justify-between mb-8">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center max-w-xs">
                  <div className="relative">
                    <div className="bg-orange-500 rounded-full p-4 mb-4">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>

            {/* Connection Line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-orange-200 -z-10">
              <div className="h-full bg-orange-500 w-full"></div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="relative flex-shrink-0">
                  <div className="bg-orange-500 rounded-full p-3">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 bg-orange-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-orange-200"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-orange-50 rounded-lg p-6 inline-block">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Estimasi Waktu Total: 3-7 Hari Kerja</h3>
            <p className="text-gray-600">Dari konsultasi hingga produk siap kirim</p>
          </div>
        </div>
      </div>
    </section>
  )
}
