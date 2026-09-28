const modalController = ({ modal, btnOpen, btnClose }) => {
  const modalElem = document.querySelector(modal);
  const cardsContainer = document.querySelector(".menu-cards");

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

  const openModal = (event) => {
    const card = event.target.closest(btnOpen);
    if (!card) {
      return;
    }
    modalElem.style.visibility = "visible";
    modalElem.style.opacity = 1;
    const cloneElem = card.cloneNode(true);
    cloneElem.classList.add("nohover");
    modalElem.innerHTML = "";
    modalElem.append(cloneElem);
    document.body.style.overflow = "hidden";
  };

  cardsContainer.addEventListener("click", openModal);
  modalElem.addEventListener("click", closeModal);
};

export default modalController;
