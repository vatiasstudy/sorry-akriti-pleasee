let current = 1;
const pages = document.querySelectorAll(".page");
const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {
  pages[current - 1].classList.remove("active");
  current++;
  if (current > pages.length) current = pages.length;
  pages[current - 1].classList.add("active");
});

/* Permanent Random Sprinkles */
const sprinkleContainer = document.getElementById("sprinkles");
const emojis = ["🌹", "🥀", "😔", "💔", "😞"];

for (let i = 0; i < 40; i++) {
  const s = document.createElement("span");
  s.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  s.style.left = Math.random() * 100 + "vw";
  s.style.fontSize = 18 + Math.random() * 22 + "px";
  s.style.animationDuration = 6 + Math.random() * 10 + "s";
  s.style.animationDelay = Math.random() * 10 + "s";
  sprinkleContainer.appendChild(s);
}
