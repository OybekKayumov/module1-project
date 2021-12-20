// Hamburger Button start //////////////////
const cover = document.querySelector('.prefer-menu');
const btnCloseMenu = document.querySelector('.exit-btn');
const btnOpenMenu = document.querySelector('.hamburger');
const btnOpenMenuAbout = document.querySelector('.hamburger-about');
const options = document.querySelectorAll('.link');
const hamburger = document.querySelectorAll('.open');
const openAbout = document.querySelector('.about-link');
const menuOpenAbout = document.querySelector('.menu-open-about');
const menuOpenHome = document.querySelector('.menu-open-home');
const openProgram = document.querySelector('.program-link');
const openMain = document.querySelector('.home-link');
const openSponsor = document.querySelector('.partner-link');
const home = document.getElementById('home');
const about = document.querySelector('.about');
// let numv = 2;

function openMenu() {
  cover.classList.remove('hidden');
  btnOpenMenu.classList.add('hidden');
  btnOpenMenuAbout.classList.add('hidden');
}

function closeMenu() {
  cover.classList.add('hidden');
  btnOpenMenu.classList.remove('hidden');
  btnOpenMenuAbout.classList.remove('hidden');
}

function openAboutSec() {
  about.classList.remove('hidden');
  home.classList.add('hidden');
}

function openHome() {
  about.classList.add('hidden');
  home.classList.remove('hidden');
}

btnOpenMenu.addEventListener('click', openMenu);
btnCloseMenu.addEventListener('click', closeMenu);
openAbout.addEventListener('click', openAboutSec);
menuOpenAbout.addEventListener('click', openAboutSec);
menuOpenHome.addEventListener('click', openHome);
openProgram.addEventListener('click', openHome);
openMain.addEventListener('click', openHome);
openSponsor.addEventListener('click', openHome);

for (let i = 0; i < hamburger.length; i += 1) {
  hamburger[i].addEventListener('click', openMenu);
}

for (let i = 0; i < options.length; i += 1) {
  options[i].addEventListener('click', closeMenu);
}

// Hamburger Button end //////////////////