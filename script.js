// ================= NAVBAR SCROLL EFFECT =================
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
});


// ================= HERO ANIMATION =================
window.addEventListener("load", () => {
  const heroContent = document.querySelector(".hero-content");

  if (heroContent) {
    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(40px)";
    heroContent.style.transition = "all 1s ease";

    setTimeout(() => {
      heroContent.style.opacity = "1";
      heroContent.style.transform = "translateY(0)";
    }, 200);
  }
});


// ================= SCROLL REVEAL =================
// Only animate service + stats

const revealItems = document.querySelectorAll(
  ".service-card, .stat-box"
);

revealItems.forEach(item => {
  item.style.opacity = "0";
  item.style.transform = "translateY(40px)";
});

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealItems.forEach(item => {
    const boxTop = item.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
      item.style.transition = "all 0.8s ease";
    }
  });
});
// ================= MOBILE MENU =================
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});


// ================= FAQ TOGGLE =================
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentElement.classList.toggle("active");
  });
});


// ================= SERVICE CARD ENTRY =================
window.addEventListener("DOMContentLoaded", () => {

const cards = document.querySelectorAll(".service-card");

if(cards.length >= 6){

cards[0].classList.add("from-left");
cards[1].classList.add("from-top");
cards[2].classList.add("from-right");
cards[3].classList.add("from-bottom");
cards[4].classList.add("from-left");
cards[5].classList.add("from-right");

setTimeout(() => {
cards.forEach(card => {
card.classList.add("show");
});
}, 300);

}

});




