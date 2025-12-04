/* =============================
   DARK NEON UI JAVASCRIPT PACK
   ============================= */

/* ---- Fade in whole page ---- */
window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
});

/* ---- Neon pulse buttons ---- */
const neonButtons = document.querySelectorAll(".neon-btn");

neonButtons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.boxShadow = "0 0 35px var(--purple), 0 0 18px var(--red)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.boxShadow = "0 0 12px var(--purple)";
    });
});

/* ---- Glass card hover intensifier ---- */
const cards = document.querySelectorAll(".glass-card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 0 40px var(--purple)";
        card.style.transform = "translateY(-12px) scale(1.02)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "0 0 30px rgba(0,0,0,0.6)";
        card.style.transform = "translateY(0) scale(1)";
    });
});

/* ---- Optional hover sound system ---- */
/* Add /sounds/hover.mp3 if you want sound */
const hoverSoundPath = "/sounds/hover.mp3";

function playHoverSound() {
    const snd = new Audio(hoverSoundPath);
    snd.volume = 0.25;
    snd.play().catch(() => {});
}

neonButtons.forEach(btn => {
    btn.addEventListener("mouseenter", playHoverSound);
});

/* ---- Floating neon particles ---- */
function createParticle() {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    const size = Math.random() * 6 + 2; 
    const x = Math.random() * window.innerWidth;

    particle.style.width = size + "px";
    particle.style.height = size + "px";
    particle.style.left = x + "px";

    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 4000);
}

setInterval(createParticle, 150);

/* ---- Fix dark mode on older browsers ---- */
if (!("backdropFilter" in document.body.style)) {
    document.documentElement.style.setProperty("--glass-bg", "rgba(0,0,0,0.5)");
    document.documentElement.style.setProperty("--glass-border", "rgba(255,255,255,0.1)");
}
