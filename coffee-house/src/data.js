let cardsDataPromise;

export function getCardsData() {
  if (!cardsDataPromise) {
    cardsDataPromise = fetch("/json/cardsData.json")
      .then(response => response.json());
  }

  return cardsDataPromise;
}