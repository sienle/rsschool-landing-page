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
      small: {
        text: "50 g",
        addtoPrice: 0
      },
      medium: {
        text: "100 g",
        addtoPrice: 3
      },
      large: {
        text: "200 g",
        addtoPrice: 6
      },
    };
  } else {
    sizes = {
      small: {
        text: "200 ml",
        addtoPrice: 0
      },
      medium: {
        text: "300 ml",
        addtoPrice: 2
      },
      large: {
        text: "400 ml",
        addtoPrice: 4
      },
    };
  }
  if (obj.category === "coffee") {
    additives = {
      first: {
        text: "Sugar",
        addtoPrice: 0.2
      },
      second: {
        text: "Cinnamon",
        addtoPrice: 1.5
      },
      third: {
        text: "Syrup",
        addtoPrice: 1
      },
    };
  } else if (obj.category === "tea") {
    additives = {
      first: {
        text: "Sugar",
        addtoPrice: 0.2
      },
      second: {
        text: "Lemon",
        addtoPrice: 1.1
      },
      third: {
        text: "Syrup",
        addtoPrice: 1
      },
    };
  } else {
    additives = {
      first: {
        text: "Berries",
        addtoPrice: 3
      },
      second: {
        text: "Nuts",
        addtoPrice: 3.5
      },
      third: {
        text: "Jam",
        addtoPrice: 2.5
      },
    };
  }
  const card = createElem("big-card");
  card.dataset.basePrice = obj.price;

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
  const totalText = createElem("width-fit heading-3", "span", "Total:");
  const cardPrice = createElem(
    "width-fit heading-3 big-card-price-value",
    "span",
    `$${obj.price}`,
  );
  total.append(totalText, cardPrice);

  const note = createElem("big-card-note");
  const noteIcon = createElem("big-card-note-icon");
  const noteText = createElem(
    "big-card-note-text caption",
    "div",
    "The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.",
  );

  note.append(noteIcon, noteText)

  const closeButton = createElem(
    "big-card-close-button action card_close",
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
