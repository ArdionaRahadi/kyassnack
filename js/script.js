// Toggle mobile menu
document.getElementById("hamburger").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("hidden");
});

// Close mobile menu when clicking on a link
document.querySelectorAll("#mobileMenu a").forEach((link) => {
  link.addEventListener("click", function () {
    document.getElementById("mobileMenu").classList.add("hidden");
  });
});

// Smooth scrolling to products
function scrollToProducts() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

// Show product detail modal
function showProductDetail(productName) {
  document.getElementById("modalTitle").textContent = productName;
  document.getElementById("productModal").classList.remove("hidden");
}

// Close modal
function closeModal() {
  document.getElementById("productModal").classList.add("hidden");
}

// Checkout function
function checkout() {
  alert("Terima kasih! Anda akan diarahkan ke halaman pembayaran.");
  closeModal();
}

// Add smooth scrolling to navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Add scroll effect to navbar
window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  const mobileMenuText = document.querySelectorAll("mobile-menu-text");
  if (window.scrollY > 100) {
    navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }
});
