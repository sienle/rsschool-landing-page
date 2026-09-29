import cardVariantMaker from "./cardVariantMaker";
import createElem from "./createElem";

export function createCard(obj) {
  const card = createElem("card");
  card.dataset.cardName = obj.name;

  const imgWrapper = createElem("zoom-out-wrapper card-img-wrapper");

  const img = document.createElement("img");
  img.src = obj.imgSrc;
  img.alt = obj.name;

  imgWrapper.append(img);

  const textContainer = createElem("card-text-container");
  const cardText = createElem("card-text");
  const cardName = createElem("card-name heading-3", "span", obj.name);
  const cardDesc = createElem("card-desc", "span", obj.description);

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
  let additives = {};
  if (obj.category === "dessert") {
    sizes = {
      small: "50 g",
      medium: "100 g",
      large: "200 g",
    };
  } else {
    sizes = {
      small: "200 ml",
      medium: "300 ml",
      large: "400 ml",
    };
  }
  if (obj.category === "coffee") {
    additives = {
      first: "Sugar",
      second: "Cinnamon",
      third: "Syrup",
    };
  } else if (obj.category === "tea") {
    additives = {
      first: "Sugar",
      second: "Lemon",
      third: "Syrup",
    };
  } else {
    additives = {
      first: "Berries",
      second: "Nuts",
      third: "Jam",
    };
  }
  const card = createElem("big-card");

  const imgWrapper = createElem("zoom-out-wrapper card-img-wrapper big-card-img");

  const img = document.createElement("img");
  img.src = obj.imgSrc;
  img.alt = obj.name;

  imgWrapper.append(img);

  const rightPart = createElem("big-card-right-part");

  const cardText = createElem("card-text");
  const cardName = createElem("card-name heading-3", "span", obj.name);
  const cardDesc = createElem("card-desc", "span", obj.description);
  cardText.append(cardName, cardDesc);

  const cardSizes = createElem("sizes-container");
  const sizeTitle = createElem("size-title", "span", "Size");
  const sizeVariants = createElem("size-variants");
  sizeVariants.append(
    cardVariantMaker("S", sizes.small, "variant-active"),
    cardVariantMaker("M", sizes.medium),
    cardVariantMaker("L", sizes.large),
  );
  cardSizes.append(sizeTitle, sizeVariants);

  const cardAdditives = createElem("additives-container");
  const additivesTitle = createElem("additive-title", "span", "Additives");
  const additiveVariants = createElem("additive-variants");
  additiveVariants.append(
    cardVariantMaker("1", additives.first),
    cardVariantMaker("2", additives.second),
    cardVariantMaker("3", additives.third),
  );
  cardAdditives.append(additivesTitle, additiveVariants);

  const total = createElem("total-container");
  const totalText = createElem("big-card-price heading-3", "span", "Total:");
  const cardPrice = createElem(
    "big-card-price heading-3",
    "span",
    `$${obj.price}`,
  );
  total.append(totalText, cardPrice);

  const note = createElem("big-card-note");
  const noteIcon = createElem("big-card-note-icon");
  const noteText = createElem(
    "big-card-note-text",
    "div",
    "The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.",
  );

  note.append(noteIcon, noteText)

  const closeButton = createElem(
    "big-card-close-button action",
    "div",
    "Close",
  );

  rightPart.append(
    cardText,
    cardSizes,
    cardAdditives,
    total,
    note,
    closeButton,
  );

  card.append(imgWrapper, rightPart);

  return card;
}
