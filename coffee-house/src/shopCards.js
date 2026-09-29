import { getCardsData } from "./data.js";
import { createCard } from "./cardMakers.js";

const menuToggler = document.querySelector(".menu-toggler");
let currentTab = document.querySelector(".menu-toggler__item--active").dataset
  .category;

async function renderTab(currentTab) {
  const cardsData = await getCardsData();
  let filtered = cardsData.filter(
    (item) => item.category == currentTab,
  );
  const cardsArr = [];
  for (let i = 0; i < filtered.length; i++) {
    let card = createCard(filtered[i]);
    cardsArr.push(card);
  }
  document.querySelector(".menu-cards").innerHTML = "";
  document.querySelector(".menu-cards").append(...cardsArr);
}

renderTab(currentTab);

menuToggler.addEventListener("click", (event) => {
  let activeTab = document.querySelector(".menu-toggler__item--active");
  let target = event.target.closest(".menu-toggler__item");
  if (!target || target === activeTab) {
    return;
  }
  activeTab.classList.remove("menu-toggler__item--active");
  target.classList.add("menu-toggler__item--active");
  currentTab = target.dataset.category;
  renderTab(currentTab);
});
