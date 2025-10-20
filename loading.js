// Animate 📷 ↔ 📸
const emoji = document.getElementById("emoji");
const loader = document.getElementById("loader");

let toggle = true;
const interval = setInterval(() => {
  emoji.textContent = toggle ? "📸" : "📷";
  toggle = !toggle;
}, 500);

window.addEventListener("load", () => {
  clearInterval(interval);
  loader.style.opacity = "0";
  loader.style.visibility = "hidden";

  setTimeout(() => {
    loader.style.display = "none";

    // ✅ Re-enable scrolling
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
  }, 600);
});
