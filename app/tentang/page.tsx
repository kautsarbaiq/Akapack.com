import React from "react"

const testimonials = [
  {
    name: "Budi, Owner Keripik Singkong Lestari",
    text: "Sejak pakai kemasan custom Akapack, produk saya makin laku dan dipercaya konsumen. Desainnya keren, kualitasnya mantap!",
  },
  {
    name: "Sari, UMKM Kopi Nusantara",
    text: "Akapack sangat membantu dari desain sampai produksi. Harga bersahabat, pelayanan ramah, hasilnya premium!",
  },
  {
    name: "Andi, Pemilik Sambal Maknyus",
    text: "Order kemasan di Akapack prosesnya cepat, bisa konsultasi gratis, dan hasilnya sesuai harapan. Recommended!",
  },
]

export default function TentangPage() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4 md:px-0">
      <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">Tentang Akapack</h1>
      <p className="text-gray-700 mb-6">Akapack adalah partner kemasan custom paperfoil terpercaya untuk UKM Indonesia. Kami hadir untuk membantu para pelaku usaha kecil dan menengah mendapatkan kemasan berkualitas premium dengan harga terjangkau dan desain yang menarik.</p>
      <section className="bg-orange-50 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-orange-600 mb-2">Visi & Misi</h2>
        <p className="mb-2 text-gray-700"><b>Visi:</b> Menjadi solusi kemasan custom terbaik dan terpercaya bagi UKM Indonesia.</p>
        <p className="mb-2 text-gray-700"><b>Misi:</b> Memberikan kemasan berkualitas, desain kreatif, dan layanan ramah untuk mendukung pertumbuhan bisnis UKM.</p>
      </section>
      <section className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold text-orange-600 mb-2">Sejarah Singkat</h2>
        <p className="text-gray-700">Berdiri sejak 2020, Akapack telah membantu ratusan UKM di seluruh Indonesia mendapatkan kemasan custom yang meningkatkan nilai jual produk mereka. Kami percaya, kemasan yang baik adalah kunci sukses bisnis UKM.</p>
      </section>
      <section className="bg-orange-50 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-orange-600 mb-2">Keunggulan Akapack</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>Desain custom sesuai kebutuhan brand Anda</li>
          <li>Kualitas bahan premium, food grade, dan ramah lingkungan</li>
          <li>Harga bersahabat untuk UKM pemula maupun berkembang</li>
          <li>Proses cepat, konsultasi gratis, dan pengiriman ke seluruh Indonesia</li>
          <li>Testimoni klien UKM yang puas dan sukses bersama Akapack</li>
        </ul>
      </section>
      <section className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold text-orange-600 mb-4">Testimoni Klien UKM</h2>
        <div className="space-y-4">
          {testimonials.map((t, i) => (
            <div key={i} className="border-l-4 border-orange-400 pl-4 py-2">
              <p className="italic text-gray-700">"{t.text}"</p>
              <span className="block text-sm text-orange-600 font-semibold mt-1">- {t.name}</span>
            </div>
          ))}
        </div>
      </section>
      <div className="text-gray-600">
        <p className="mb-2">Kami percaya kemasan yang baik adalah investasi untuk pertumbuhan bisnis Anda. Tim Akapack siap membantu dari proses desain, produksi, hingga pengiriman. Mari wujudkan kemasan impian Anda bersama kami!</p>
        <p className="font-semibold text-orange-500">Akapack - Kemasan Custom Berkualitas untuk UKM Indonesia</p>
      </div>
    </main>
  )
} 