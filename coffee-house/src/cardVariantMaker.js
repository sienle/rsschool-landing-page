import createElem from './createElem';

export default function cardVariantMaker(textIcon, content, classNameText = '') {
  const cardVariant = createElem(`variant`);
  if (classNameText) cardVariant.classList.add(classNameText);
  const icon = createElem("variant-icon action", "div", textIcon);
  const variantText = createElem("variant-text action", "div", content);
  cardVariant.append(icon, variantText);
  return cardVariant;
}