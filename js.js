const btnOpen = document.querySelector('.side-button button');
const sideMenu = document.querySelector('.side-menu');

let setbuttonYvalue
let setcurrentvalue
let fadeTreshold
let setlastbuttonYvalue

btnOpen.addEventListener('click', () => {
  const expanded = sideMenu.getAttribute('aria-expanded') === 'true';

  sideMenu.setAttribute('aria-expanded', !expanded);

  btnOpen.innerHTML = !expanded ? 'MENU ↑' : 'MENU ↓';
});

const pixelValue = document.querySelector('.side-button')

let lastScrollY = 0;

window.addEventListener("scroll", () => {
  const currentScrollY = window.pageYOffset;

  if (currentScrollY > lastScrollY) {
    document.querySelector('.menu').style.opacity = '0'
    document.querySelector('.side-button').style.opacity = '0'
    document.querySelector('.side-menu-desc').style.opacity = '0'
  } else if (currentScrollY < lastScrollY) {
    document.querySelector('.menu').style.opacity = '1'
    document.querySelector('.side-button').style.opacity = '1'
    document.querySelector('.side-menu-desc').style.opacity = '1'
  }

  lastScrollY = currentScrollY;
});