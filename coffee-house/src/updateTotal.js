export default function updateTotal(card) {
  const basePrice = Number(card.dataset.basePrice);

  const size = card.querySelector(
    ".size-variants .variant-active",
  );

  const additives = card.querySelectorAll(
    ".additive-variants .variant-active",
  );

  let total = basePrice;

  total += Number(size.dataset.addToPrice);

  additives.forEach((additive) => {
    total += Number(additive.dataset.addToPrice);
  });

  const priceElement = card.querySelector(".big-card-price-value");

  priceElement.textContent = `$${total.toFixed(2)}`;
}