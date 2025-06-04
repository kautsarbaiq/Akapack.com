"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, CheckCircle, MessageCircle } from "lucide-react"

export default function OrderPage() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    business: "",
    packageType: "",
    quantity: "",
    description: "",
    logo: null as File | null,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({ ...prev, logo: file }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      `Halo Akapack! Saya ingin memesan kemasan custom dengan detail berikut:

Nama: ${formData.name}
Bisnis: ${formData.business}
Jenis Kemasan: ${formData.packageType}
Jumlah: ${formData.quantity}
Deskripsi: ${formData.description}

Mohon informasi lebih lanjut. Terima kasih!`,
    )
    window.open(`https://wa.me/6281234567890?text=${message}`, "_blank")
  }

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Pesanan Berhasil Dikirim!</h1>
          <p className="text-lg text-gray-600 mb-8">
            Terima kasih atas kepercayaan Anda. Tim kami akan segera menghubungi Anda melalui WhatsApp untuk membahas
            detail pesanan dan memberikan penawaran terbaik.
          </p>
          <div className="space-y-4">
            <Button onClick={handleWhatsAppOrder} className="bg-green-500 hover:bg-green-600" size="lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              Lanjut ke WhatsApp
            </Button>
            <div>
              <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                Buat Pesanan Lain
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pesan Kemasan Custom Sekarang</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Isi form di bawah ini untuk mendapatkan penawaran terbaik sesuai kebutuhan bisnis Anda
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Detail Pemesanan</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nama Lengkap *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Masukkan nama lengkap"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="whatsapp">Nomor WhatsApp *</Label>
                      <Input
                        id="whatsapp"
                        value={formData.whatsapp}
                        onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                        placeholder="08xxxxxxxxxx"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="business">Nama Bisnis/Produk</Label>
                    <Input
                      id="business"
                      value={formData.business}
                      onChange={(e) => handleInputChange("business", e.target.value)}
                      placeholder="Contoh: Keripik Singkong Mama Sari"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="packageType">Jenis Kemasan *</Label>
                      <Select onValueChange={(value) => handleInputChange("packageType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih jenis kemasan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standing-pouch">Standing Pouch</SelectItem>
                          <SelectItem value="sachet">Sachet</SelectItem>
                          <SelectItem value="ziplock">Ziplock Pouch</SelectItem>
                          <SelectItem value="flat-bottom">Flat Bottom Pouch</SelectItem>
                          <SelectItem value="custom">Custom/Lainnya</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="quantity">Jumlah Pesanan *</Label>
                      <Input
                        id="quantity"
                        value={formData.quantity}
                        onChange={(e) => handleInputChange("quantity", e.target.value)}
                        placeholder="Contoh: 1000 pcs"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description">Deskripsi Kebutuhan</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="Jelaskan detail kebutuhan kemasan Anda (ukuran, warna, fitur khusus, dll.)"
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="logo">Upload Logo/Desain (Opsional)</Label>
                    <div className="mt-2">
                      <label
                        htmlFor="logo"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-2 text-gray-400" />
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">Klik untuk upload</span> atau drag & drop
                          </p>
                          <p className="text-xs text-gray-500">PNG, JPG, PDF (MAX. 10MB)</p>
                        </div>
                        <input
                          id="logo"
                          type="file"
                          className="hidden"
                          accept=".png,.jpg,.jpeg,.pdf"
                          onChange={handleFileChange}
                        />
                      </label>
                      {formData.logo && (
                        <p className="mt-2 text-sm text-gray-600">File terpilih: {formData.logo.name}</p>
                      )}
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600" size="lg">
                    Kirim Pesanan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary & Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informasi Pemesanan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-100 rounded-full p-2">
                    <span className="text-orange-500 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Konsultasi Gratis</h4>
                    <p className="text-sm text-gray-600">Tim kami akan menghubungi Anda</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-100 rounded-full p-2">
                    <span className="text-orange-500 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Desain & Mockup</h4>
                    <p className="text-sm text-gray-600">Kami buatkan desain sesuai keinginan</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-100 rounded-full p-2">
                    <span className="text-orange-500 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Produksi & Kirim</h4>
                    <p className="text-sm text-gray-600">3-7 hari kerja siap dikirim</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Keunggulan Akapack</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Material food grade berkualitas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Desain custom sesuai brand</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Harga terjangkau untuk UKM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Pengiriman ke seluruh Indonesia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Garansi kualitas 100%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-orange-50">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-gray-900 mb-2">Butuh Bantuan?</h3>
                <p className="text-sm text-gray-600 mb-4">Tim customer service kami siap membantu Anda 24/7</p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
