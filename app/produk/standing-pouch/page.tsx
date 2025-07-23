import { Metadata } from 'next'
import SEOImage from '@/components/seo-image'
import ProductSchema from '@/components/product-schema'

export const metadata: Metadata = {
  title: "Standing Pouch Food Grade Custom - Kemasan Fleksibel Zipper Berkualitas",
  description: "Jual standing pouch food grade dengan zipper custom untuk kemasan makanan, minuman, dan produk UKM. Harga kompetitif, supplier terpercaya Jakarta.",
  keywords: "standing pouch food grade, kemasan fleksibel zipper, harga standing pouch custom, supplier kemasan Jakarta, standing pouch dengan zipper, kemasan berdiri custom",
}

export default function StandingPouchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ProductSchema
        name="Standing Pouch Food Grade dengan Zipper"
        description="Kemasan standing pouch food grade berkualitas tinggi dengan zipper untuk berbagai produk makanan dan minuman"
        image="/images/products/standing-pouch-food-grade-zipper.webp"
        category="Kemasan Fleksibel"
        sku="SP-FG-001"
      />

      {/* Hero Section */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Standing Pouch Food Grade dengan Zipper - Kemasan Fleksibel Berkualitas
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          <SEOImage
            src="/images/products/standing-pouch-food-grade-zipper.webp"
            alt="Standing Pouch Food Grade dengan Zipper untuk Kemasan Makanan dan Minuman UKM"
            width={600}
            height={400}
            priority={true}
          />
          <div>
            <p className="text-lg mb-4">
              Solusi kemasan standing pouch food grade terbaik untuk UKM Indonesia. 
              Dilengkapi zipper berkualitas tinggi untuk menjaga kesegaran produk lebih lama.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Material food grade berkualitas tinggi</li>
              <li>Zipper resealable untuk kemudahan konsumen</li>
              <li>Desain custom sesuai brand Anda</li>
              <li>Minimum order quantity fleksibel</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Spesifikasi Teknis Lengkap */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Spesifikasi Teknis Standing Pouch Food Grade</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Material & Struktur</h3>
            <ul className="space-y-2">
              <li>• <strong>Struktur:</strong> PET/AL/PE atau BOPP/VMCPP untuk barrier optimal</li>
              <li>• <strong>Ketebalan:</strong> 100-200 micron (customizable)</li>
              <li>• <strong>Food Grade Certification:</strong> FDA approved, halal certified</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Ukuran & Kapasitas</h3>
            <ul className="space-y-2">
              <li>• <strong>Ukuran:</strong> 50g - 5kg (custom size available)</li>
              <li>• <strong>Dimensi:</strong> Lebar 80mm - 400mm, Tinggi 120mm - 600mm</li>
              <li>• <strong>Gusset:</strong> 30mm - 150mm untuk stabilitas optimal</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Keunggulan Bahan Multilayer */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Keunggulan Bahan Multilayer untuk Standing Pouch</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Barrier Protection</h3>
            <p>Lapisan aluminium foil memberikan perlindungan maksimal terhadap oksigen, kelembaban, dan cahaya UV yang dapat merusak produk makanan.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Heat Sealability</h3>
            <p>Lapisan PE (Polyethylene) memungkinkan heat sealing yang kuat dan konsisten, memastikan kemasan tertutup rapat dan aman.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Printability</h3>
            <p>Permukaan PET/BOPP memberikan hasil cetak yang tajam dan tahan lama untuk branding yang menarik dan profesional.</p>
          </div>
        </div>
      </section>

      {/* Aplikasi Industri */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Aplikasi Industri Standing Pouch Fleksibel</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Industri Makanan & Minuman</h3>
            <ul className="space-y-2">
              <li>• Kopi bubuk dan biji kopi premium</li>
              <li>• Snack kering, keripik, dan camilan</li>
              <li>• Bumbu dapur dan rempah-rempah</li>
              <li>• Teh celup dan teh herbal</li>
              <li>• Susu bubuk dan minuman instan</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Industri Non-Food</h3>
            <ul className="space-y-2">
              <li>• Kosmetik dan produk perawatan</li>
              <li>• Suplemen dan vitamin</li>
              <li>• Deterjen dan produk pembersih</li>
              <li>• Pet food dan makanan hewan</li>
              <li>• Produk farmasi dan herbal</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Studi Kasus */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Studi Kasus: Sukses UKM Kopi dengan Standing Pouch Custom</h2>
        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Klien: Kopi Nusantara Premium</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Tantangan:</h4>
              <ul className="space-y-1">
                <li>• Kemasan lama tidak menjaga aroma kopi</li>
                <li>• Biaya kemasan terlalu tinggi</li>
                <li>• Tampilan kurang premium</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Solusi Akapack:</h4>
              <ul className="space-y-1">
                <li>• Standing pouch dengan valve degassing</li>
                <li>• Material barrier tinggi untuk aroma</li>
                <li>• Desain premium dengan matte finish</li>
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Hasil:</h4>
            <p className="text-gray-700">
              Penjualan meningkat 40% dalam 6 bulan, customer retention naik 25%, 
              dan biaya kemasan turun 15% dengan kualitas yang lebih baik.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Produk */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">FAQ Standing Pouch Food Grade</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-lg font-semibold mb-2">Berapa harga standing pouch custom per pcs?</h3>
            <p className="text-gray-700">
              Harga standing pouch custom mulai dari Rp 150-500 per pcs tergantung ukuran, 
              material, dan jumlah order. Untuk harga terbaik, hubungi tim sales kami.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-lg font-semibold mb-2">Apakah tersedia sample standing pouch?</h3>
            <p className="text-gray-700">
              Ya, kami menyediakan sample gratis untuk evaluasi kualitas. 
              Sample dapat dikirim dalam 2-3 hari kerja ke seluruh Indonesia.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-lg font-semibold mb-2">Berapa minimum order quantity (MOQ)?</h3>
            <p className="text-gray-700">
              MOQ standing pouch food grade adalah 5.000 pcs. 
              Untuk order dalam jumlah besar, tersedia harga khusus dan cicilan 0%.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-lg font-semibold mb-2">Bagaimana cara menjaga kualitas standing pouch saat penyimpanan?</h3>
            <p className="text-gray-700">
              Simpan di tempat kering, hindari sinar matahari langsung, dan jaga suhu ruangan. 
              Standing pouch dapat bertahan hingga 2 tahun dengan penyimpanan yang tepat.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">
          Siap Upgrade Kemasan Produk Anda?
        </h2>
        <p className="mb-6">
          Dapatkan konsultasi gratis dan penawaran terbaik untuk standing pouch custom Anda
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">
            Konsultasi Gratis
          </button>
          <button className="border border-white px-6 py-3 rounded-lg font-semibold">
            Download Katalog
          </button>
        </div>
      </section>
    </div>
  )
} 