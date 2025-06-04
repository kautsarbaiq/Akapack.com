"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent(
      "Halo, saya tertarik dengan layanan kemasan custom Akapack. Bisa tolong berikan informasi lebih lanjut?",
    )
    window.open(`https://wa.me/6281234567890?text=${message}`, "_blank")
  }

  return (
    <>
      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="bg-white rounded-lg shadow-xl border mb-4 w-80 max-w-[calc(100vw-3rem)]">
            <div className="bg-orange-500 text-white p-4 rounded-t-lg flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Customer Support</h3>
                <p className="text-sm opacity-90">Biasanya membalas dalam beberapa menit</p>
              </div>
              <button onClick={toggleChat} className="text-white hover:bg-orange-600 rounded p-1">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4">
              <div className="bg-gray-100 rounded-lg p-3 mb-4">
                <p className="text-sm text-gray-700">
                  Halo! 👋 Ada yang bisa kami bantu terkait kemasan custom untuk bisnis Anda?
                </p>
              </div>
              <div className="space-y-2">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full text-left p-2 rounded border hover:bg-gray-50 text-sm"
                >
                  💬 Konsultasi via WhatsApp
                </button>
                <button
                  onClick={() => (window.location.href = "/pesan")}
                  className="w-full text-left p-2 rounded border hover:bg-gray-50 text-sm"
                >
                  📋 Form Pemesanan Custom
                </button>
                <button
                  onClick={() => (window.location.href = "/produk")}
                  className="w-full text-left p-2 rounded border hover:bg-gray-50 text-sm"
                >
                  📦 Lihat Katalog Produk
                </button>
              </div>
            </div>
          </div>
        )}

        <Button
          onClick={toggleChat}
          className="bg-orange-500 hover:bg-orange-600 rounded-full w-14 h-14 shadow-lg"
          size="lg"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </>
  )
}
