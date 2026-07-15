const btnOpen = document.querySelector('.side-button button');
const sideMenu = document.querySelector('.side-menu');

let setbuttonYvalue
let setcurrentvalue
let fadeTreshold
let setlastbuttonYvalue

btnOpen.addEventListener('click', () => {
  const expanded = sideMenu.getAttribute('aria-expanded') === 'true';

  sideMenu.setAttribute('aria-expanded', !expanded);

  const menu = document.querySelector(".side-menu");

  menu.classList.toggle("active");

  btnOpen.innerHTML = 'MENU ↑';
});

const pixelValue = document.querySelector('.side-button')

let lastScrollY = 0;

window.addEventListener("scroll", () => {
  const currentScrollY = window.pageYOffset;
  const menu = document.querySelector(".side-menu");

  if (currentScrollY > lastScrollY) {
    document.querySelector('.menu').style.opacity = '0'
    document.querySelector('.side-button').style.opacity = '0'
    menu.classList.remove("active");
    btnOpen.innerHTML =   'MENU ↓';

  } else if (currentScrollY < lastScrollY) {
    document.querySelector('.menu').style.opacity = '1'
    document.querySelector('.side-button').style.opacity = '1'
  }

  lastScrollY = currentScrollY;
});