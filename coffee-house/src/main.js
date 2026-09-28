import modalController from "./modal.js";

import "./style.scss";

window.addEventListener("load", () => {
  document.documentElement.classList.remove("js-loading");
});

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

    history.replaceState(null, "", window.location.pathname);
  });
}

//Burger
const burgerButton = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burger__nav");
const overflowWrapper = document.querySelector(".overflow__wraper");
const menuLinks = document.querySelectorAll(".burger__nav-item");

const closeBurgerMenu = () => {
  burgerButton.classList.remove("burger__active");
  burgerMenu.classList.remove("burger__nav_active");
  overflowWrapper.classList.remove("overflow__wraper_active");
  document.body.style.overflow = null;
};

const openBurgerMenu = () => {
  burgerButton.classList.add("burger__active");
  burgerMenu.classList.add("burger__nav_active");
  overflowWrapper.classList.add("overflow__wraper_active");
  document.body.style.overflow = "hidden";
};

burgerButton.addEventListener("click", () => {
  if (burgerButton.classList.contains("burger__active")) {
    closeBurgerMenu();
  } else {
    openBurgerMenu();
  }
});

menuLinks.forEach((item) => {
  item.addEventListener("click", closeBurgerMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && burgerButton.classList.contains("burger__active")) {
    closeBurgerMenu();
    burgerButton.blur();
  }
});

window.addEventListener("resize", () => {
  let screenWid = window.innerWidth;
  if (screenWid > 920) {
    closeBurgerMenu();
  }
});

modalController({
  modal: ".modal",
  btnOpen: ".card",
  btnClose: ".card_close",
  cardsContainer: ".menu-cards"
});
