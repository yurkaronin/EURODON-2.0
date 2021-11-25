"use strict";
// прилипающее меню в шапке

window.onscroll = function showHeader() {
  var header = document.querySelector('.header');

  if (window.pageYOffset > header.offsetHeight) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

// кнопка меню
var menuButton = document.querySelector('.button-menu');
if (menuButton) {
  let mainMenu = document.querySelector('.mobile-main-nav');
  menuButton.addEventListener('click', function (r) {
    document.body.classList.toggle('custom-lock');
    menuButton.classList.toggle('active');
    mainMenu.classList.toggle('active');
  });
}

// кнопка поиска в шапке
let searchButton = document.querySelector('.button-search');
if (searchButton) {
  let headerSearch = document.querySelector('.header__search-form');
  searchButton.addEventListener('click', function (r) {
    searchButton.classList.toggle('active');
    headerSearch.classList.toggle('active');
  });
}

// кнопка аккордеона в меню
let mobMenu = document.querySelectorAll(".main-nav-mobile");
let subList = document.querySelectorAll(".sublist-nav");
let subMenuButton = document.querySelectorAll('.toggle-btn').forEach((item) =>
  item.addEventListener('click', () => {
    item.classList.toggle('active');
    subList.classList.toggle('active');
    mobMenu.classList.toggle('active');
  })
);

/* var currentLocation = window.location;
console.log(currentLocation); */
