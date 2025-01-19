// Initialize AOS and particles.js
(() => {
  AOS.init({
    easing: "ease",
    duration: 1500,
    once: true,
  });

  particlesJS.load("particles-js", "particles.json");
})();

// Functions to help with interactions
const disableScroll = () => (document.body.style.overflowY = "hidden");
const enableScroll = () => (document.body.style.overflowY = "scroll");

const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", () => {
  hamburger.classList.contains("is-active") ? enableScroll() : disableScroll();
});

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((a) => a.addEventListener("click", enableScroll));

const details = document.querySelectorAll("details");
details.forEach((e) =>
  e.addEventListener("toggle", () => e.classList.toggle("enlarge"))
);

const messages = [
  ["Hi again.", "You're already on the site."],
  ["You clicked again?", "I'm not hiding anything, I swear."],
  ["change da world", "my final message. Goodb ye"],
];
const toggleText = () => {
  if (!messages) return;
  const currMsg = messages.shift();
  document.querySelector(".landing > h1").innerText = currMsg[0];
  document.querySelector(".landing > h6").innerText = currMsg[1];
  if (!messages.length) {
    const link = "https://myinstants.com/media/sounds/untitled_dSmd8Co.mp3";
    new Audio(link).play();
    const astronaut = document.querySelector(".astronaut");
    setTimeout(() => {
      astronaut.style.transition = "5s";
      astronaut.style.opacity = "0";
    }, 7250);
  }
};
document.getElementById("self")?.addEventListener("click", toggleText);

document
  .querySelectorAll(".desc-items > li")
  .forEach((li) => li.prepend("-\t"));
