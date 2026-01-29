/* ================= AOS INIT ================= */
AOS.init({
  duration: 1000,
  once: true,
  easing: "ease-out-cubic"
});

/* ================= VANTA BACKGROUND ================= */
/* Futuristic moving water / energy background */
VANTA.WAVES({
  el: "#hero",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x0a1a2f,
  shininess: 60,
  waveHeight: 20,
  waveSpeed: 0.6,
  zoom: 0.85
});

/* ================= COUNTDOWN TIMER ================= */
/* You can change offer time here */
const offerEndTime = new Date();
offerEndTime.setHours(offerEndTime.getHours() + 6); // 6 hour deal

const timerEl = document.getElementById("timer");

function updateTimer() {
  const now = new Date().getTime();
  const distance = offerEndTime - now;

  if (distance < 0) {
    timerEl.innerHTML = "Offer Ended";
    return;
  }

  const hours = Math.floor((distance / (1000 * 60 * 60)));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timerEl.innerHTML =
    `${String(hours).padStart(2, '0')}:` +
    `${String(minutes).padStart(2, '0')}:` +
    `${String(seconds).padStart(2, '0')}`;
}

setInterval(updateTimer, 1000);
updateTimer();

/* ================= WHATSAPP AUTO MESSAGE ================= */
document.querySelectorAll(".buy-btn").forEach(button => {
  button.addEventListener("click", () => {
    const product = button.getAttribute("data-product");
    const message = `Hello Vaishno Computers,%0AI'm interested in ${product}.%0APlease share details.`;
    window.open(`https://wa.me/919953323632?text=${message}`, "_blank");
  });
});

/* ================= BRAND FILTER ================= */
const filterButtons = document.querySelectorAll(".filter-buttons button");
const products = document.querySelectorAll(".product-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const brand = btn.getAttribute("data-brand");

    products.forEach(card => {
      if (brand === "all" || card.getAttribute("data-brand") === brand) {
        card.style.display = "block";
        gsap.fromTo(card,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.6 }
        );
      } else {
        card.style.display = "none";
      }
    });
  });
});

/* ================= GSAP HERO ANIMATION ================= */
gsap.from(".hero-content h1", {
  opacity: 0,
  y: 60,
  duration: 1.2,
  ease: "power4.out"
});

gsap.from(".hero-content p", {
  opacity: 0,
  y: 40,
  delay: 0.3,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".hero-buttons", {
  opacity: 0,
  scale: 0.8,
  delay: 0.6,
  duration: 0.8,
  ease: "back.out(1.7)"
});

