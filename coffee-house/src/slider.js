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
  let touchStartX = 0;

  function showSlide(index) {
    track.style.transform = `translateX(-${index * 100}%)`;

    controls.forEach((control, controlIndex) => {
      control.classList.toggle(
        "slider-controls__active",
        controlIndex === index,
      );
    });
  }

  function nextSlide() {
    currentSlide += 1;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    showSlide(currentSlide);
  }

  function previousSlide() {
    currentSlide -= 1;

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
  }

  rightArrow.addEventListener("click", nextSlide);

  leftArrow.addEventListener("click", previousSlide);

  controls.forEach((control, index) => {
    control.addEventListener("click", () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });

  slider.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].clientX;
  });

  slider.addEventListener("touchend", (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const swipeDistance = touchStartX - touchEndX;

    if (Math.abs(swipeDistance) < 50) {
      return;
    }

    if (swipeDistance > 0) {
      nextSlide();
    } else {
      previousSlide();
    }
  });

  showSlide(currentSlide);
}