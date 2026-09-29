export function initSlider() {
  const slider = document.querySelector(".slider");
  if (!slider) {
    return;
  }

  const track = slider.querySelector(".slider-track");
  const slides = slider.querySelectorAll(".slide");

  const leftArrow = slider.querySelector(".left-arrow");
  const rightArrow = slider.querySelector(".right-arrow");

  const controls = slider.querySelectorAll(".slider-controls__item");

  let currentSlide = 0;

  function showSlide(index) {
    track.style.transform = `translateX(-${index * 100}%)`;

    controls.forEach((control, controlIndex) => {
      control.classList.toggle(
        "slider-controls__active",
        controlIndex === index,
      );
    });
  }

  rightArrow.addEventListener("click", () => {
    currentSlide += 1;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    showSlide(currentSlide);
  });

  leftArrow.addEventListener("click", () => {
    currentSlide -= 1;

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
  });

  controls.forEach((control, index) => {
    control.addEventListener("click", () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });

  showSlide(currentSlide);
}
