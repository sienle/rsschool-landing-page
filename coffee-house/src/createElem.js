export default function createElem(className, tagName = 'div', text = '') {
  const elem = document.createElement(tagName);
  elem.classList.add(className);
  elem.textContent = text;
  return elem;
}