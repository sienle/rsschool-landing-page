import { getCardsData } from "./data.js";
import { createCard } from "./cardMakers.js";

const menuToggler = document.querySelector(".menu-toggler");
const cardsContainer = document.querySelector(".menu-cards");
const loadMoreButton = document.querySelector(".menu-load-more");

let currentTab = document.querySelector(".menu-toggler__item--active").dataset
  .category;
let previousWidth = window.innerWidth;
let visibleCount = getCardsCount();

function getCardsCount(width = window.innerWidth) {
  if (width > 1200) {
    return 8;
  }

  if (width > 1106) {
    return 6;
  }

  return 4;
}

async function renderTab(currentTab) {
  const cardsData = await getCardsData();
  const filtered = cardsData.filter((item) => item.category === currentTab);
  const cardsToRender = filtered.slice(0, visibleCount);
  const cardsArr = cardsToRender.map((item) => createCard(item));
  cardsContainer.replaceChildren(...cardsArr);
  const shouldShowLoadMore =
    Number.isFinite(visibleCount) && visibleCount < filtered.length;
  loadMoreButton.style.display = shouldShowLoadMore ? "block" : "none";
}

renderTab(currentTab);

menuToggler.addEventListener("click", (event) => {
  const activeTab = document.querySelector(".menu-toggler__item--active");
  const target = event.target.closest(".menu-toggler__item");
  if (!target || target === activeTab) {
    return;
  }
  activeTab.classList.remove("menu-toggler__item--active");
  target.classList.add("menu-toggler__item--active");
  currentTab = target.dataset.category;
  visibleCount = getCardsCount();
  renderTab(currentTab);
});

loadMoreButton.addEventListener("click", () => {
  visibleCount += getCardsCount();
  renderTab(currentTab);
});

function handleResize() {
  const currentWidth = window.innerWidth;

  const previousCount = getCardsCount(previousWidth);
  const currentCount = getCardsCount(currentWidth);

  if (currentCount !== previousCount) {
    if (currentWidth < previousWidth) {
      visibleCount = currentCount;
    } else if (visibleCount < currentCount) {
      visibleCount = currentCount;
    }

    renderTab(currentTab);
  }

  previousWidth = currentWidth;
}

window.addEventListener("resize", handleResize);
