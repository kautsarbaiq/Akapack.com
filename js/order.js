// Order Form Functionality
document.addEventListener("DOMContentLoaded", () => {
  const orderForm = document.getElementById("custom-order-form")
  const packagingTypeSelect = document.getElementById("packaging-type")
  const otherPackagingGroup = document.getElementById("other-packaging-type-group")
  const sizeSelect = document.getElementById("size")
  const customSizeGroup = document.getElementById("custom-size-group")
  const fileUpload = document.getElementById("logo-upload")
  const filePreview = document.getElementById("file-preview")
  const uploadArea = document.querySelector(".upload-area")

  // Pre-fill form if product was selected from products page
  const selectedProduct = localStorage.getItem("selectedProduct")
  if (selectedProduct && packagingTypeSelect) {
    const productMap = {
      "Standing Pouch": "standing-pouch",
      Sachet: "sachet",
      "Ziplock Pouch": "ziplock",
      "Paper Box": "paper-box",
      "Label Botol": "bottle-label",
      "Flat Bottom Pouch": "flat-bottom",
    }

    const productValue = productMap[selectedProduct]
    if (productValue) {
      packagingTypeSelect.value = productValue
    }

    // Clear the stored product
    localStorage.removeItem("selectedProduct")
  }

  // Show/hide other packaging type input
  if (packagingTypeSelect && otherPackagingGroup) {
    packagingTypeSelect.addEventListener("change", function () {
      if (this.value === "other") {
        otherPackagingGroup.style.display = "block"
        document.getElementById("other-packaging-type").required = true
      } else {
        otherPackagingGroup.style.display = "none"
        document.getElementById("other-packaging-type").required = false
      }
    })
  }

  // Show/hide custom size input
  if (sizeSelect && customSizeGroup) {
    sizeSelect.addEventListener("change", function () {
      if (this.value === "custom") {
        customSizeGroup.style.display = "block"
        document.getElementById("custom-size").required = true
      } else {
        customSizeGroup.style.display = "none"
        document.getElementById("custom-size").required = false
      }
    })
  }

  // File upload handling
  if (fileUpload && uploadArea && filePreview) {
    // Click to upload
    uploadArea.addEventListener("click", () => {
      fileUpload.click()
    })

    // Drag and drop
    uploadArea.addEventListener("dragover", function (e) {
      e.preventDefault()
      this.style.borderColor = "var(--primary-color)"
      this.style.background = "var(--light-gray)"
    })

    uploadArea.addEventListener("dragleave", function (e) {
      e.preventDefault()
      this.style.borderColor = "var(--medium-gray)"
      this.style.background = "transparent"
    })

    uploadArea.addEventListener("drop", function (e) {
      e.preventDefault()
      this.style.borderColor = "var(--medium-gray)"
      this.style.background = "transparent"

      const files = e.dataTransfer.files
      if (files.length > 0) {
        handleFileUpload(files[0])
      }
    })

    fileUpload.addEventListener("change", function () {
      if (this.files.length > 0) {
        handleFileUpload(this.files[0])
      }
    })
  }

  function handleFileUpload(file) {
    // Validate file type
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf", "image/svg+xml"]
    if (!allowedTypes.includes(file.type)) {
      alert("Format file tidak didukung. Gunakan JPG, PNG, PDF, atau SVG.")
      return
    }

    // Validate file size (10MB max)
    if (file.size > 10 * 1024 * 1024) {
      alert("Ukuran file terlalu besar. Maksimal 10MB.")
      return
    }

    // Show file preview
    filePreview.style.display = "block"
    filePreview.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-file" style="color: var(--primary-color);"></i>
                <span>${file.name}</span>
                <span style="color: var(--dark-gray); font-size: 0.8rem;">(${formatFileSize(file.size)})</span>
                <button type="button" onclick="removeFile()" style="background: none; border: none; color: var(--primary-color); cursor: pointer;">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `
  }

  // Format file size
  function formatFileSize(bytes) {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  // Remove file function (global scope)
  window.removeFile = () => {
    fileUpload.value = ""
    filePreview.style.display = "none"
    filePreview.innerHTML = ""
  }

  // Form validation
  function validateForm(formData) {
    const errors = []

    // Required fields
    if (!formData.get("name")) errors.push("Nama lengkap harus diisi")
    if (!formData.get("business-name")) errors.push("Nama usaha harus diisi")
    if (!formData.get("whatsapp")) errors.push("Nomor WhatsApp harus diisi")
    if (!formData.get("packaging-type")) errors.push("Jenis kemasan harus dipilih")
    if (!formData.get("size")) errors.push("Ukuran kemasan harus dipilih")
    if (!formData.get("quantity")) errors.push("Jumlah pesanan harus diisi")
    if (!formData.get("product-description")) errors.push("Deskripsi produk harus diisi")
    if (!formData.get("design-status")) errors.push("Status desain harus dipilih")
    if (!formData.get("terms")) errors.push("Anda harus menyetujui syarat dan ketentuan")

    // WhatsApp number validation
    const whatsapp = formData.get("whatsapp")
    if (whatsapp && !/^[0-9+\-\s()]+$/.test(whatsapp)) {
      errors.push("Format nomor WhatsApp tidak valid")
    }

    // Email validation (if provided)
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return re.test(email)
    }
    const email = formData.get("email")
    if (email && !validateEmail(email)) {
      errors.push("Format email tidak valid")
    }

    // Quantity validation
    const quantity = Number.parseInt(formData.get("quantity"))
    if (quantity && quantity < 100) {
      errors.push("Minimum order adalah 100 pcs")
    }

    return errors
  }

  // Form submission
  if (orderForm) {
    orderForm.addEventListener("submit", function (e) {
      e.preventDefault()

      const formData = new FormData(this)
      const errors = validateForm(formData)

      if (errors.length > 0) {
        alert("Mohon perbaiki kesalahan berikut:\n\n" + errors.join("\n"))
        return
      }

      // Show loading state
      const submitBtn = this.querySelector('button[type="submit"]')
      const originalText = submitBtn.textContent
      submitBtn.textContent = "Mengirim..."
      submitBtn.disabled = true

      // Simulate form submission
      setTimeout(() => {
        // Reset button
        submitBtn.textContent = originalText
        submitBtn.disabled = false

        // Show success modal
        showSuccessModal()

        // Reset form
        this.reset()
        removeFile()

        // Send WhatsApp message
        sendWhatsAppMessage(formData)
      }, 2000)
    })
  }

  function showSuccessModal() {
    const modal = document.getElementById("order-success-modal")
    if (modal) {
      modal.style.display = "block"

      // Close modal events
      const closeBtn = modal.querySelector(".close-modal")
      if (closeBtn) {
        closeBtn.addEventListener("click", () => {
          modal.style.display = "none"
        })
      }

      // Close on outside click
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.style.display = "none"
        }
      })
    }
  }

  function sendWhatsAppMessage(formData) {
    const data = {
      name: formData.get("name"),
      business: formData.get("business-name"),
      whatsapp: formData.get("whatsapp"),
      email: formData.get("email"),
      packagingType: formData.get("packaging-type"),
      otherPackagingType: formData.get("other-packaging-type"),
      size: formData.get("size"),
      customSize: formData.get("custom-size"),
      quantity: formData.get("quantity"),
      productDescription: formData.get("product-description"),
      designStatus: formData.get("design-status"),
      additionalNotes: formData.get("additional-notes"),
    }

    let message = `*PESANAN KEMASAN CUSTOM - AKAPACK*\n\n`
    message += `*Data Pemesan:*\n`
    message += `Nama: ${data.name}\n`
    message += `Usaha: ${data.business}\n`
    message += `WhatsApp: ${data.whatsapp}\n`
    if (data.email) message += `Email: ${data.email}\n`

    message += `\n*Detail Pesanan:*\n`
    message += `Jenis Kemasan: ${data.packagingType}`
    if (data.otherPackagingType) message += ` (${data.otherPackagingType})`
    message += `\n`
    message += `Ukuran: ${data.size}`
    if (data.customSize) message += ` (${data.customSize})`
    message += `\n`
    message += `Jumlah: ${data.quantity} pcs\n`
    message += `Produk: ${data.productDescription}\n`
    message += `Status Desain: ${data.designStatus}\n`

    if (data.additionalNotes) {
      message += `\n*Catatan Tambahan:*\n${data.additionalNotes}\n`
    }

    message += `\nMohon segera diproses. Terima kasih!`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodedMessage}`

    // Open WhatsApp in new tab after a short delay
    setTimeout(() => {
      window.open(whatsappUrl, "_blank")
    }, 1000)
  }

  // Real-time price estimation
  const quantityInput = document.getElementById("quantity")
  const packagingSelect = document.getElementById("packaging-type")

  function updatePriceEstimation() {
    const quantity = Number.parseInt(quantityInput?.value) || 0
    const packagingType = packagingSelect?.value

    if (quantity >= 100 && packagingType && window.ProductUtils) {
      const estimatedPrice = window.ProductUtils.calculatePrice(packagingType, quantity)

      // Show price estimation
      let priceDisplay = document.querySelector(".price-estimation")
      if (!priceDisplay) {
        priceDisplay = document.createElement("div")
        priceDisplay.className = "price-estimation"
        priceDisplay.style.cssText = `
                    background: var(--light-gray);
                    padding: 15px;
                    border-radius: 6px;
                    margin-top: 10px;
                    text-align: center;
                `
        quantityInput.parentNode.appendChild(priceDisplay)
      }

      priceDisplay.innerHTML = `
                <strong>Estimasi Harga: Rp ${estimatedPrice.toLocaleString("id-ID")}</strong>
                <br><small>*Harga dapat berubah sesuai spesifikasi final</small>
            `
    }
  }

  if (quantityInput && packagingSelect) {
    quantityInput.addEventListener("input", updatePriceEstimation)
    packagingSelect.addEventListener("change", updatePriceEstimation)
  }
})
