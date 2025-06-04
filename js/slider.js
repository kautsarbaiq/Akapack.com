// Hero Slider
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide")
  const controls = document.querySelectorAll(".slider-controls .control")
  let currentSlide = 0
  let slideInterval

  function showSlide(index) {
    // Hide all slides
    slides.forEach((slide) => slide.classList.remove("active"))
    controls.forEach((control) => control.classList.remove("active"))

    // Show current slide
    if (slides[index]) {
      slides[index].classList.add("active")
    }
    if (controls[index]) {
      controls[index].classList.add("active")
    }
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length
    showSlide(currentSlide)
  }

  function startSlideshow() {
    slideInterval = setInterval(nextSlide, 5000) // Change slide every 5 seconds
  }

  function stopSlideshow() {
    clearInterval(slideInterval)
  }

  // Initialize slider
  if (slides.length > 0) {
    showSlide(0)
    startSlideshow()

    // Add click events to controls
    controls.forEach((control, index) => {
      control.addEventListener("click", () => {
        currentSlide = index
        showSlide(currentSlide)
        stopSlideshow()
        startSlideshow() // Restart the slideshow
      })
    })

    // Pause slideshow on hover
    const sliderContainer = document.querySelector(".slider-container")
    if (sliderContainer) {
      sliderContainer.addEventListener("mouseenter", stopSlideshow)
      sliderContainer.addEventListener("mouseleave", startSlideshow)
    }
  }
})

// Testimonial Slider
document.addEventListener("DOMContentLoaded", () => {
  const testimonialSlides = document.querySelectorAll(".testimonial-slide")
  const testimonialControls = document.querySelectorAll(".testimonial-controls .control")
  let currentTestimonial = 0
  let testimonialInterval

  function showTestimonial(index) {
    // Hide all testimonials
    testimonialSlides.forEach((slide) => slide.classList.remove("active"))
    testimonialControls.forEach((control) => control.classList.remove("active"))

    // Show current testimonial
    if (testimonialSlides[index]) {
      testimonialSlides[index].classList.add("active")
    }
    if (testimonialControls[index]) {
      testimonialControls[index].classList.add("active")
    }
  }

  function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length
    showTestimonial(currentTestimonial)
  }

  function startTestimonialSlideshow() {
    testimonialInterval = setInterval(nextTestimonial, 6000) // Change every 6 seconds
  }

  function stopTestimonialSlideshow() {
    clearInterval(testimonialInterval)
  }

  // Initialize testimonial slider
  if (testimonialSlides.length > 0) {
    showTestimonial(0)
    startTestimonialSlideshow()

    // Add click events to controls
    testimonialControls.forEach((control, index) => {
      control.addEventListener("click", () => {
        currentTestimonial = index
        showTestimonial(currentTestimonial)
        stopTestimonialSlideshow()
        startTestimonialSlideshow() // Restart the slideshow
      })
    })

    // Pause slideshow on hover
    const testimonialSlider = document.querySelector(".testimonial-slider")
    if (testimonialSlider) {
      testimonialSlider.addEventListener("mouseenter", stopTestimonialSlideshow)
      testimonialSlider.addEventListener("mouseleave", startTestimonialSlideshow)
    }
  }
})
