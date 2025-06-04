// Chat Widget Functionality
document.addEventListener("DOMContentLoaded", () => {
  const chatButton = document.querySelector(".chat-button")
  const chatBox = document.querySelector(".chat-box")
  const closeChat = document.querySelector(".close-chat")
  const chatInput = document.querySelector(".chat-input input")
  const chatSendBtn = document.querySelector(".chat-input button")
  const chatMessages = document.querySelector(".chat-messages")

  // Toggle chat box
  if (chatButton && chatBox) {
    chatButton.addEventListener("click", () => {
      chatBox.classList.toggle("active")
    })
  }

  // Close chat
  if (closeChat && chatBox) {
    closeChat.addEventListener("click", () => {
      chatBox.classList.remove("active")
    })
  }

  // Send message
  function sendMessage() {
    const message = chatInput.value.trim()
    if (message) {
      // Add user message
      addMessage(message, "sent")
      chatInput.value = ""

      // Simulate response after a delay
      setTimeout(() => {
        addAutoResponse(message)
      }, 1000)
    }
  }

  // Add message to chat
  function addMessage(text, type) {
    const messageDiv = document.createElement("div")
    messageDiv.className = `message ${type}`

    const messageP = document.createElement("p")
    messageP.textContent = text

    const timeSpan = document.createElement("span")
    timeSpan.className = "time"
    timeSpan.textContent = new Date().toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    })

    messageDiv.appendChild(messageP)
    messageDiv.appendChild(timeSpan)
    chatMessages.appendChild(messageDiv)

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight
  }

  // Auto response based on keywords
  function addAutoResponse(userMessage) {
    let response = ""
    const message = userMessage.toLowerCase()

    if (message.includes("harga") || message.includes("biaya")) {
      response =
        "Harga kemasan kami mulai dari Rp 800 untuk sachet hingga Rp 3.500 untuk paper box. Untuk penawaran detail, silakan hubungi tim kami di WhatsApp."
    } else if (message.includes("minimum") || message.includes("min order")) {
      response = "Minimum order kami adalah 100 pcs untuk sebagian besar produk. Untuk sachet minimum 200 pcs."
    } else if (message.includes("waktu") || message.includes("berapa lama")) {
      response = "Waktu produksi kami adalah 7-14 hari kerja setelah desain disetujui dan pembayaran DP diterima."
    } else if (message.includes("desain")) {
      response =
        "Kami menyediakan layanan desain gratis! Tim desainer kami akan membantu membuat kemasan yang menarik untuk produk Anda."
    } else if (message.includes("pengiriman") || message.includes("kirim")) {
      response =
        "Kami melayani pengiriman ke seluruh Indonesia. Biaya pengiriman akan disesuaikan dengan lokasi dan berat paket."
    } else {
      response =
        "Terima kasih atas pertanyaan Anda. Untuk informasi lebih detail, silakan hubungi tim kami di WhatsApp atau isi form pemesanan."
    }

    addMessage(response, "received")

    // Add quick action buttons
    addQuickActions()
  }

  // Add quick action buttons
  function addQuickActions() {
    const actionsDiv = document.createElement("div")
    actionsDiv.className = "quick-actions"
    actionsDiv.style.cssText = `
            display: flex;
            flex-direction: column;
            gap: 5px;
            margin-top: 10px;
        `

    const actions = [
      { text: "📞 Hubungi WhatsApp", action: () => window.open("https://wa.me/6281234567890", "_blank") },
      { text: "📋 Form Pemesanan", action: () => (window.location.href = "order.html") },
      { text: "📦 Lihat Produk", action: () => (window.location.href = "products.html") },
    ]

    actions.forEach((action) => {
      const button = document.createElement("button")
      button.textContent = action.text
      button.style.cssText = `
                padding: 8px 12px;
                background: var(--light-gray);
                border: 1px solid var(--medium-gray);
                border-radius: 6px;
                cursor: pointer;
                font-size: 0.8rem;
                transition: var(--transition);
            `

      button.addEventListener("click", action.action)
      button.addEventListener("mouseenter", () => {
        button.style.background = "var(--primary-color)"
        button.style.color = "white"
      })
      button.addEventListener("mouseleave", () => {
        button.style.background = "var(--light-gray)"
        button.style.color = "var(--secondary-color)"
      })

      actionsDiv.appendChild(button)
    })

    chatMessages.appendChild(actionsDiv)
    chatMessages.scrollTop = chatMessages.scrollHeight
  }

  // Send message on button click
  if (chatSendBtn) {
    chatSendBtn.addEventListener("click", sendMessage)
  }

  // Send message on Enter key
  if (chatInput) {
    chatInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        sendMessage()
      }
    })
  }

  // Close chat when clicking outside
  document.addEventListener("click", (e) => {
    if (chatBox && chatBox.classList.contains("active")) {
      if (!chatBox.contains(e.target) && !chatButton.contains(e.target)) {
        chatBox.classList.remove("active")
      }
    }
  })

  // Show chat notification after some time
  setTimeout(() => {
    if (chatButton && !chatBox.classList.contains("active")) {
      chatButton.style.animation = "pulse 2s infinite"
    }
  }, 10000) // Show after 10 seconds

  // Add pulse animation
  const pulseStyle = document.createElement("style")
  pulseStyle.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
    `
  document.head.appendChild(pulseStyle)
})
