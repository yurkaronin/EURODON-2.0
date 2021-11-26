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

// Диалоговые окна
const btns = document.querySelectorAll('.btn');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');
const buttonClose = document.querySelectorAll('.modal');

btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('modal--visible');
      document.body.classList.toggle('custom-lock');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
    modalOverlay.classList.add('modal-overlay--visible');
    document.body.classList.toggle('custom-lock');
  });
});

modalOverlay.addEventListener('click', (e) => {

  if (e.target == modalOverlay) {
    modalOverlay.classList.remove('modal-overlay--visible');
    document.body.classList.toggle('custom-lock');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
      document.body.classList.toggle('custom-lock');
    });
  }

  if (e.target.classList.contains('modal-close')) {
    modalOverlay.classList.remove('modal-overlay--visible');
    document.body.classList.toggle('custom-lock');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
      document.body.classList.toggle('custom-lock');
    });
  }

  if (e.target.classList.contains('button--close-text')) {
    modalOverlay.classList.remove('modal-overlay--visible');
    document.body.classList.toggle('custom-lock');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
      document.body.classList.toggle('custom-lock');
    });
  }
});

// Кастомная валидация форм
(function () {
  window.addEventListener("click", function (event) {

    if (event.target.classList.contains("js-validate")) {

      const formParent = event.target.closest("form");

      formParent.querySelectorAll(".custom-form__item-wrapper").forEach(function (item) {
        console.log(item)
        if (item.querySelector("[data-required]")) {
          if (item.querySelector("[data-required]").value === '') {
            console.log("не заполнен")
            item.classList.add("js-field-error");
          } else {
            console.log("заполнен")
            item.classList.remove("js-field-error");
          }
        }
      });
    }
  })
})();

// маска для поля с телефоном
Inputmask("+7 (999) 999-99-99").mask('[type="tel"]');

// слайдер первый экран
const topSwiper = document.querySelector('.top-slider__swiper');
if (topSwiper) {
let swiper1 = new Swiper(".top-slider__swiper", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".top-slider__button-next",
    prevEl: ".top-slider__button-prev",
  },
  pagination: {
    el: ".top-slider__pagination",
    clickable: true,
  },
});
}

// слайдер по направлениям услуг с иконками
const directionsSwiper = document.querySelector('.services-group-slider__swiper');
if (directionsSwiper) {
  let swiper2 = new Swiper(".services-group-slider__swiper", {
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1150: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 32,
      }
    },
    slidesPerGroup: 1,
    loopFillGroupWithBlank: true,
    loop: true,
    navigation: {
      nextEl: ".services-group-slider__button-next",
      prevEl: ".services-group-slider__button-prev"
    },
    pagination: {
      el: ".services-group-slider__pagination",
      clickable: true,
    },
  });
}

// слайдер специалистов
const doctorsSwiper = document.querySelector('.doctors-slider__swiper');
if (directionsSwiper) {
var swiper = new Swiper(".doctors-slider__swiper", {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 34,
  loop: true,
  loopedSlides: 2,
  loopAdditionalSlides: 2,
  navigation: {
      nextEl: ".doctors-slider__button-next",
      prevEl: ".doctors-slider__button-prev"
    },
    pagination: {
      el: ".doctors-slider__pagination",
      clickable: true,
    },
});
}