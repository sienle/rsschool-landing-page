import createElem from './createElem';

export default function cardVariantMaker(textIcon, variantData, classNameText = '') {
  const cardVariant = createElem(`variant`);
  if (classNameText) cardVariant.classList.add(classNameText);
  const icon = createElem("variant-icon action", "div", textIcon);
  const variantText = createElem("variant-text action", "div", variantData.text);
  cardVariant.append(icon, variantText);
  cardVariant.dataset.addToPrice = variantData.addtoPrice;
  return cardVariant;
}