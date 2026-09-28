const menuToggler = document.querySelector(".menu-toggler");
const allTabs = document.querySelectorAll(".menu-toggler__item");
let currentTab = document.querySelector(".menu-toggler__item--active").dataset
  .category;

function createCard(obj) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="zoom-out-wrapper card-img-wrapper">
      <img src="${obj.imgSrc}" alt="${obj.name}">
    </div>
    <div class="card-text-container">
      <div class="card-text">
        <span class="card-name heading-3">${obj.name}</span>
        <span class="card-desc">${obj.description}</span>
      </div>
      <span class="card-price heading-3">${obj.price}</span>
    </div>
  `;
  return card;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

async function renderTab(currentTab) {
  const cardsData = await (await fetch("/json/cardsData.json")).json();
  let arr = Array.from(cardsData);
  let filtered = arr.filter(
    (item) => item.category.toLowerCase() == currentTab,
  );
  shuffle(filtered);
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
  console.log(`currentTab: ${currentTab}`);
  renderTab(currentTab);
});
