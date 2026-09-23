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
