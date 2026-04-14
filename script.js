// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// CLOSE MENU ON CLICK
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});


// FAQ TOGGLE
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const btn = item.querySelector(".faq-question");

  if (btn) {
    btn.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  }
});


// ACTIVE MENU
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});


// SIMPLE FORM ALERT
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! We will contact you shortly.");
    form.reset();
  });
}
window.addEventListener("load", () => {
  const heroLeft = document.querySelector(".hero-left");
  const heroRight = document.querySelector(".hero-right");

  if (heroLeft) {
    heroLeft.style.opacity = "0";
    heroLeft.style.transform = "translateY(30px)";
    heroLeft.style.transition = "all 0.8s ease";
  }

  if (heroRight) {
    heroRight.style.opacity = "0";
    heroRight.style.transform = "translateY(30px)";
    heroRight.style.transition = "all 1s ease";
  }

  setTimeout(() => {
    if (heroLeft) {
      heroLeft.style.opacity = "1";
      heroLeft.style.transform = "translateY(0)";
    }
  }, 150);

  setTimeout(() => {
    if (heroRight) {
      heroRight.style.opacity = "1";
      heroRight.style.transform = "translateY(0)";
    }
  }, 350);
});


document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  document.getElementById("form-msg").style.display = "block";

  this.reset();
});
