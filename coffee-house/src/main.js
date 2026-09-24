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

    history.replaceState(null, "", window.location.pathname);
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
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = null;
  }
});

menuLinks.forEach(item => {
  item.addEventListener('click', ()=> {
    if (document.body.style.overflow == 'hidden') {
      burgerButton.classList.toggle('burger__active');
      burgerMenu.classList.toggle('burger__nav_active');
      overflowWrapper.classList.toggle('overflow__wraper_active');
      document.body.style.overflow = null;
    }
  });
});

window.addEventListener('resize', () => {
  let screenWid = window.innerWidth;
  if (screenWid > 920) {
    burgerButton.classList.remove('burger__active');
    burgerMenu.classList.remove('burger__nav_active');
    overflowWrapper.classList.remove('overflow__wraper_active');
    document.body.style.overflow = null;
  }
})
