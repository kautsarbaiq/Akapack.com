// Product Filter Functionality
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".category-filter")
  const productCards = document.querySelectorAll(".product-card")

  // Filter products
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter")

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")

      // Filter products
      productCards.forEach((card) => {
        const category = card.getAttribute("data-category")

        if (filter === "all" || category === filter) {
          card.style.display = "block"
          card.style.animation = "fadeIn 0.5s ease"
        } else {
          card.style.display = "none"
        }
      })
    })
  })

  // Product card hover effects
  productCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })

  // Quick order functionality
  const orderButtons = document.querySelectorAll(".product-card .btn-primary")
  orderButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()

      const productCard = this.closest(".product-card")
      const productName = productCard.querySelector("h3").textContent

      // Store selected product in localStorage
      localStorage.setItem("selectedProduct", productName)

      // Redirect to order page
      window.location.href = "order.html"
    })
  })

  // Search functionality (if search input exists)
  const searchInput = document.querySelector(".product-search")
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const searchTerm = this.value.toLowerCase()

      productCards.forEach((card) => {
        const productName = card.querySelector("h3").textContent.toLowerCase()
        const productDesc = card.querySelector("p").textContent.toLowerCase()

        if (productName.includes(searchTerm) || productDesc.includes(searchTerm)) {
          card.style.display = "block"
        } else {
          card.style.display = "none"
        }
      })
    })
  }
})

// Product comparison functionality
let comparisonList = []

function addToComparison(productId) {
  if (comparisonList.length < 3 && !comparisonList.includes(productId)) {
    comparisonList.push(productId)
    updateComparisonUI()
  } else if (comparisonList.includes(productId)) {
    removeFromComparison(productId)
  } else {
    alert("Maksimal 3 produk dapat dibandingkan")
  }
}

function removeFromComparison(productId) {
  comparisonList = comparisonList.filter((id) => id !== productId)
  updateComparisonUI()
}

function updateComparisonUI() {
  const comparisonBadge = document.querySelector(".comparison-badge")
  if (comparisonBadge) {
    comparisonBadge.textContent = comparisonList.length
    comparisonBadge.style.display = comparisonList.length > 0 ? "block" : "none"
  }

  // Update comparison buttons
  const comparisonButtons = document.querySelectorAll(".add-to-comparison")
  comparisonButtons.forEach((button) => {
    const productId = button.getAttribute("data-product-id")
    if (comparisonList.includes(productId)) {
      button.textContent = "Hapus dari Perbandingan"
      button.classList.add("active")
    } else {
      button.textContent = "Bandingkan"
      button.classList.remove("active")
    }
  })
}

// Price calculator
function calculatePrice(productType, quantity, customizations = []) {
  const basePrices = {
    "standing-pouch": 1500,
    sachet: 800,
    ziplock: 2000,
    "paper-box": 3500,
    "bottle-label": 500,
    "flat-bottom": 2500,
  }

  const basePrice = basePrices[productType] || 1000
  let totalPrice = basePrice * quantity

  // Apply quantity discounts
  if (quantity >= 1000) {
    totalPrice *= 0.9 // 10% discount
  } else if (quantity >= 500) {
    totalPrice *= 0.95 // 5% discount
  }

  // Add customization costs
  customizations.forEach((custom) => {
    switch (custom) {
      case "premium-material":
        totalPrice *= 1.2
        break
      case "special-finish":
        totalPrice *= 1.15
        break
      case "custom-size":
        totalPrice += quantity * 200
        break
    }
  })

  return Math.round(totalPrice)
}

// Export functions for use in other files
window.ProductUtils = {
  addToComparison,
  removeFromComparison,
  calculatePrice,
}
