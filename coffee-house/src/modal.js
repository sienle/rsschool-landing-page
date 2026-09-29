import { getCardsData } from "./data.js";
import { createBigCard } from "./cardMakers.js";
import updateTotal from './updateTotal.js';

function selectSize(size) {
  const variants = size.parentElement.querySelectorAll(".variant");

  variants.forEach((variant) => {
    variant.classList.remove("variant-active");
  });

  size.classList.add("variant-active");
}

function toggleAdditive(additive) {
  additive.classList.toggle("variant-active");
}

const modalController = ({ modal, btnOpen, btnClose, cardsContainer }) => {
  const modalElem = document.querySelector(modal);
  const parrentContainer = document.querySelector(cardsContainer);

  modalElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
  `;

  const closeModal = (event) => {
    modalElem.style.opacity = 0;
    setTimeout(() => {
      modalElem.style.visibility = "hidden";
    }, 300);
    document.body.style.overflow = null;
  };

  const openModal = async (event) => {
    const card = event.target.closest(btnOpen);
    if (!card) {
      return;
    }
    const cardsData = await getCardsData();
    const cardToInsert = createBigCard(cardsData, card.dataset.cardName);
    modalElem.innerHTML = "";
    modalElem.append(cardToInsert);
    modalElem.style.visibility = "visible";
    modalElem.style.opacity = 1;
    document.body.style.overflow = "hidden";
  };

  parrentContainer.addEventListener("click", openModal);

  modalElem.addEventListener("click", (event) => {
    const target = event.target;
    if (target === modalElem || target.closest?.(btnClose)) {
      closeModal();
    }

    const size = event.target.closest(".size-variants .variant");

    if (size) {
      selectSize(size);
      updateTotal(size.closest(".big-card"));
      return;
    }

    const additive = event.target.closest(".additive-variants .variant");

    if (additive) {
      toggleAdditive(additive);
      updateTotal(additive.closest(".big-card"));
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
};

export default modalController;
