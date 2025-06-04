import React from "react"

const articles = [
  {
    title: "Tips Memilih Kemasan yang Tepat untuk Produk Makanan",
    excerpt: "Panduan lengkap memilih jenis kemasan yang sesuai dengan karakteristik produk makanan Anda...",
    date: "15 Januari 2024",
    image: "/images/berita1.jpg",
  },
  {
    title: "Kisah Sukses UKM Keripik Singkong dengan Kemasan Baru",
    excerpt: "Bagaimana kemasan yang menarik membantu UKM keripik singkong meningkatkan penjualan hingga 300%...",
    date: "10 Januari 2024",
    image: "/images/berita2.jpg",
  },
  {
    title: "Tren Kemasan Ramah Lingkungan untuk UKM Modern",
    excerpt: "Mengenal berbagai pilihan kemasan eco-friendly yang cocok untuk bisnis berkelanjutan...",
    date: "5 Januari 2024",
    image: "/images/berita3.jpg",
  },
  {
    title: "Strategi Branding UKM Lewat Desain Kemasan",
    excerpt: "Desain kemasan yang tepat dapat meningkatkan daya tarik dan kepercayaan konsumen...",
    date: "2 Januari 2024",
    image: "/images/berita4.jpg",
  },
  {
    title: "Cara Menghitung Kebutuhan Kemasan untuk Bisnis Online",
    excerpt: "Tips praktis menentukan jumlah dan jenis kemasan agar efisien dan hemat biaya...",
    date: "28 Desember 2023",
    image: "/images/berita5.jpg",
  },
  {
    title: "Testimoni: Omzet Naik 2x Lipat Setelah Ganti Kemasan Akapack",
    excerpt: "Simak kisah inspiratif UKM yang sukses berkat kemasan custom dari Akapack...",
    date: "20 Desember 2023",
    image: "/images/berita6.jpg",
  },
]

const tips = [
  "Pilih kemasan sesuai karakter produk dan target pasar",
  "Gunakan desain yang mencerminkan brand Anda",
  "Pastikan bahan kemasan food grade dan aman",
  "Manfaatkan kemasan sebagai media promosi",
  "Jangan ragu konsultasi gratis dengan tim Akapack!",
]

export default function BeritaPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4 md:px-0">
      <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">Berita & Tips UKM</h1>
      <p className="text-gray-700 mb-8">Update terbaru, tips kemasan, dan kisah sukses UKM bersama Akapack. Temukan inspirasi dan solusi kemasan terbaik untuk bisnis Anda!</p>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {articles.map((a, i) => (
          <article key={i} className="bg-white rounded-xl shadow-lg border-l-8 border-orange-400 p-0 hover:shadow-xl transition-all flex flex-col">
            <img
              src={a.image}
              alt={a.title}
              className="w-full h-48 object-cover rounded-t-xl"
              style={{ background: '#ffe5d0' }}
              loading="lazy"
            />
            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-xl font-semibold text-orange-600 mb-2">{a.title}</h2>
              <p className="text-gray-600 mb-2 flex-1">{a.excerpt}</p>
              <span className="text-xs text-gray-400">{a.date}</span>
            </div>
          </article>
        ))}
      </div>
      <section className="bg-orange-50 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">Tips Kemasan Sukses untuk UKM</h2>
        <ul className="list-decimal pl-6 text-gray-700 space-y-2">
          {tips.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
      </section>
      <div className="text-center text-gray-500 text-sm mt-8">Ingin berbagi kisah sukses UKM Anda? Hubungi tim Akapack dan dapatkan kesempatan tampil di sini!</div>
    </main>
  )
} 