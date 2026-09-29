import { getCardsData } from "./data.js";
import { createCard } from "./cardMakers.js";

const menuToggler = document.querySelector(".menu-toggler");
const cardsContainer = document.querySelector(".menu-cards");
const loadMoreButton = document.querySelector(".menu-load-more");
let currentTab = document.querySelector(".menu-toggler__item--active").dataset
  .category;

const mediumScreen = window.matchMedia("(max-width: 1200px)");
const smallScreen = window.matchMedia("(max-width: 1106px)");

let visibleCount = getInitialCardsCount();

function getInitialCardsCount() {
  if (window.innerWidth > 1200) {
    return Infinity;
  }

  if (window.innerWidth > 1106) {
    return 6;
  }

  return 4;
}

function getLoadStep() {
  if (window.innerWidth > 1106) {
    return 2;
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
  visibleCount = getInitialCardsCount();
  renderTab(currentTab);
});

loadMoreButton.addEventListener("click", () => {
  visibleCount += getLoadStep();
  renderTab(currentTab);
});

function handleBreakpointChange() {
  visibleCount = getInitialCardsCount();
  renderTab(currentTab);
}

mediumScreen.addEventListener("change", handleBreakpointChange);
smallScreen.addEventListener("change", handleBreakpointChange);
