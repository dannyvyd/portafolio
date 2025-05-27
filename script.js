// Mobile Navigation
const menuToggle = document.getElementById("menuToggle")
const mobileNav = document.getElementById("mobileNav")
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")

// Toggle mobile menu
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active")
  mobileNav.classList.toggle("active")
  document.body.classList.toggle("no-scroll")
})

// Close mobile menu when clicking on a link
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active")
    mobileNav.classList.remove("active")
    document.body.classList.remove("no-scroll")
  })
})

// Back to Top Button
const backToTopButton = document.getElementById("backToTop")

// Show/hide back to top button based on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add("visible")
  } else {
    backToTopButton.classList.remove("visible")
  }
})

// Scroll to top when clicking the button
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

// Form Submission
const contactForm = document.getElementById("contactForm")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form values
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const message = document.getElementById("message").value

  // Here you would typically send the form data to a server
  // For this example, we'll just log it to the console
  console.log("Form submitted:", { name, email, message })

  // Show success message (in a real application)
  alert("¡Mensaje enviado con éxito! Te responderé lo antes posible.")

  // Reset form
  contactForm.reset()
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    const targetElement = document.querySelector(targetId)

    if (targetElement) {
      const headerHeight = document.querySelector(".header").offsetHeight
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Set current year in footer
document.getElementById("currentYear").textContent = new Date().getFullYear()

// Simple animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll(".project-card, .skill-card")

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top
    const windowHeight = window.innerHeight

    if (elementPosition < windowHeight - 100) {
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
    }
  })
}

// Set initial styles for animation
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".project-card, .skill-card")

  elements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Trigger animation on initial load
  animateOnScroll()
})

// Trigger animation on scroll
window.addEventListener("scroll", animateOnScroll)
