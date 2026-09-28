export function createCard(obj) {
  const card = document.createElement("div");
  card.className = "card";
  card.dataset.cardName = obj.name;

  const imgWrapper = document.createElement("div");
  imgWrapper.className = "zoom-out-wrapper card-img-wrapper";

  const img = document.createElement("img");
  img.src = obj.imgSrc;
  img.alt = obj.name;

  imgWrapper.append(img);

  const textContainer = document.createElement("div");
  textContainer.className = "card-text-container";

  const cardText = document.createElement("div");
  cardText.className = "card-text";

  const cardName = document.createElement("span");
  cardName.className = "card-name heading-3";
  cardName.textContent = obj.name;

  const cardDesc = document.createElement("span");
  cardDesc.className = "card-desc";
  cardDesc.textContent = obj.description;

  cardText.append(cardName, cardDesc);

  const cardPrice = document.createElement("span");
  cardPrice.className = "card-price heading-3";
  cardPrice.textContent = obj.price;

  textContainer.append(cardText, cardPrice);

  card.append(imgWrapper, textContainer);

  return card;
}

export function createBigCard(cardsData, cardNameData) {
  const obj = cardsData.find((item) => item.name === cardNameData);
  let sizes = {};
  if (obj.category === 'dessert') {
    sizes = {
      small: "50 g",
      medium: "100 g",
      large: "200 g"
    };
  } else {
    sizes = {
      small: "200 ml",
      medium: "300 ml",
      large: "400 ml"
    };
  }
  const card = document.createElement("div");
  card.className = "big-card";

  const imgWrapper = document.createElement("div");
  imgWrapper.className = "zoom-out-wrapper card-img-wrapper";

  const img = document.createElement("img");
  img.src = obj.imgSrc;
  img.alt = obj.name;

  imgWrapper.append(img);

  const rightPart = document.createElement("div");

  const descriptionDiv = document.createElement("div");
  descriptionDiv.className = "card-text-container";

  const cardText = document.createElement("div");
  cardText.className = "card-text";

  const cardName = document.createElement("span");
  cardName.className = "card-name heading-3";
  cardName.textContent = obj.name;

  const cardDesc = document.createElement("span");
  cardDesc.className = "card-desc";
  cardDesc.textContent = obj.description;

  cardText.append(cardName, cardDesc);

  const cardPrice = document.createElement("span");
  cardPrice.className = "card-price heading-3";
  cardPrice.textContent = obj.price;

  descriptionDiv.append(cardText, cardPrice);

  card.append(imgWrapper, descriptionDiv);

  return card;
}
