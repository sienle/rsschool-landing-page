import "./style.scss";

const themeSwitch = document.querySelector("#theme-switch");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  themeSwitch.checked = true;
  document.documentElement.dataset.theme = "dark";
}

themeSwitch.addEventListener("change", () => {
  const theme = themeSwitch.checked ? "dark" : "light";

  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
});

const scrollUp = document.querySelector(".scroll-up");

if (scrollUp) {
  window.addEventListener("scroll", () => {
    scrollUp.classList.toggle("visible", window.scrollY > 500);
  });

  scrollUp.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
