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


//Burger
const burgerButton = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger__nav');
const overflowWrapper = document.querySelector('.overflow__wraper');
const menuLinks = document.querySelectorAll('.burger__nav-item');

burgerButton.addEventListener('click', ()=> {
  burgerButton.classList.toggle('burger__active');
  burgerMenu.classList.toggle('burger__nav_active');
  overflowWrapper.classList.toggle('overflow__wraper_active');
  if (burgerButton.classList.contains('burger__active')) {
    document.querySelector('body').style.overflow = 'hidden';
  } else {
    document.querySelector('body').style.overflow = null;
  }
});

menuLinks.forEach(item => {
  item.addEventListener('click', ()=> {
    if (document.querySelector('body').style.overflow == 'hidden') {
      burgerButton.classList.toggle('burger__active');
      burgerMenu.classList.toggle('burger__nav_active');
      overflowWrapper.classList.toggle('overflow__wraper_active');
      document.querySelector('body').style.overflow = null;
    }
  });
});

window.addEventListener('resize', () => {
  screenWid = window.innerWidth;
  if (screenWid > 768 && burgerButton.classList.contains('burger__active')) {
    burgerButton.classList.toggle('burger__active');
    burgerMenu.classList.toggle('burger__nav_active');
    overflowWrapper.classList.toggle('overflow__wraper_active');
    document.querySelector('body').style.overflow = null;
  }
})
