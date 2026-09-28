const menuToggler = document.querySelector('.menu-toggler');

menuToggler.addEventListener('click', (event)=> {
  let activeTab = document.querySelector('.menu-toggler__item--active');
  let target = event.target.closest('.menu-toggler__item');
  if (!target || target === activeTab) {
    return;
  }
  activeTab.classList.remove('menu-toggler__item--active');
  target.classList.add('menu-toggler__item--active');
});