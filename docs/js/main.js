"use strict";
// прилипающее меню в шапке
window.onscroll = function showHeader() {
  let header = document.querySelector('.header');

  if (window.pageYOffset > header.offsetHeight) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

// кнопка меню
const menuButton = document.querySelector('.menu-button');
if (menuButton) {
  const mainMenu = document.querySelector('.main-nav');
  menuButton.addEventListener('click', function (r) {
    document.body.classList.toggle('custom-lock');
    menuButton.classList.toggle('active');
    mainMenu.classList.toggle('show');
  });
}

// кнопка поиска в шапке
const searchButton = document.querySelector('.button-search');
if (searchButton) {
  const headerSearch = document.querySelector('.header__search-form');
  searchButton.addEventListener('click', function (r) {
    searchButton.classList.toggle('active');
    headerSearch.classList.toggle('active');
  });
}

/* var currentLocation = window.location;
console.log(currentLocation); */
