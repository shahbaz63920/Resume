const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const copyButton = document.getElementById("copyEmail");
const copyFeedback = document.getElementById("copyFeedback");
const email = "muhammad.63920@iqra.edu.pk";

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light");
  const isLight = body.classList.contains("light");
  themeToggle.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
  themeToggle.textContent = isLight ? "☀" : "◐";
});

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "×" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(email);
    copyFeedback.textContent = "Email address copied to clipboard.";
  } catch (error) {
    copyFeedback.textContent = `Email: ${email}`;
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
