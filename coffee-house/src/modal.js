import { getCardsData } from "./data.js";
import { createBigCard } from "./cardMakers.js";

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
    const target = event.target;
    if (target === modalElem || target.closest?.(btnClose)) {
      modalElem.style.opacity = 0;
      setTimeout(() => {
        modalElem.style.visibility = "hidden";
      }, 300);
      document.body.style.overflow = null;
    }
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
  modalElem.addEventListener("click", closeModal);
};

export default modalController;
