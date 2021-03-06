"use strict";
let header = document.querySelector('.header-new');
let headerHeight = header.clientHeight;
document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

// прилипающее меню в шапке
window.onscroll = function() {


  if (window.pageYOffset > headerHeight) {
    header.classList.add('sticky');

  } else {
    header.classList.remove('sticky');

  }

  document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);


}



// кнопка меню и кнопка поиска в шапке
let menuButton = document.querySelector('.button-menu');
let searchButton = document.querySelector('.button-search');
let mainMenu = document.querySelector('.mobile-main-nav');
let headerSearch = document.querySelector('.header__search-form');

menuButton.addEventListener('click', function (r) {
  document.body.classList.toggle('custom-lock');
  menuButton.classList.toggle('active');
  mainMenu.classList.toggle('active');
  searchButton.classList.remove('active');
  headerSearch.classList.remove('active');
});

searchButton.addEventListener('click', function (r) {
  searchButton.classList.toggle('active');
  headerSearch.classList.toggle('active');
  menuButton.classList.remove('active');
  mainMenu.classList.remove('active');
  document.body.classList.remove('custom-lock');
});


// взаимное отключение кнопок меню и поиск
if (menuButton.classList.contains('active')) {
  searchButton.classList.remove('active');
}

if (searchButton.classList.contains('active')) {
  menuButton.classList.remove('active');
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

// Кастомный select
const elements = document.querySelectorAll('.custom-select__list');

if (elements) {
  let nameSelect;
  for (let i = 0, customName = 1; i < elements.length; i++) {
    elements[i].setAttribute('data-name', `select${customName}`);
    nameSelect = elements[i].getAttribute('data-name');


    const example = new Choices(`[data-name='${nameSelect}']`, {
      itemSelectText: '',
      searchEnabled: false,
      placeholder: false,
    });

    customName++;
  }
};

SmoothScroll({
  // Время скролла 400 = 0.4 секунды
  animationTime: 800,
  // Размер шага в пикселях
  stepSize: 75,

  // Дополнительные настройки:

  // Ускорение
  accelerationDelta: 30,
  // Максимальное ускорение
  accelerationMax: 2,

  // Поддержка клавиатуры
  keyboardSupport: true,
  // Шаг скролла стрелками на клавиатуре в пикселях
  arrowScroll: 50,

  // Pulse (less tweakable)
  // ratio of "tail" to "acceleration"
  pulseAlgorithm: true,
  pulseScale: 4,
  pulseNormalize: 1,

  // Поддержка тачпада
  touchpadSupport: true,
})


// табы faq
var faqItems = document.querySelectorAll('.main-faq__item');

for (let faqItem of faqItems) {
  let itemTitle = faqItem.querySelector('.main-faq__issue');
  itemTitle.onclick = function () {
    faqItem.classList.toggle('active');
  };
}

// табы второй уровень
var faqItems2 = document.querySelectorAll('.main-faq__subitem');
for (let faqItem2 of faqItems2) {
  let itemTitle2 = faqItem2.querySelector('.main-faq__issue');
  itemTitle2.onclick = function () {
    faqItem2.classList.toggle('active');
  };
}


// Анонсы филлиалов
let filialCards = document.querySelectorAll('.filial-card');
for (let filialCard of filialCards) {
  filialCard.onclick = function () {
    filialCard.classList.toggle('active');
  };
}; // слайдер первый экран
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
      1024: {
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
if (doctorsSwiper) {
  var swiper = new Swiper(".doctors-slider__swiper", {
    breakpoints: {
      230: {
        slidesPerView: 1,
        spaceBetween: 24,
      },
      // 1024: {
      //   slidesPerView: 1,
      //   spaceBetween: 24,
      //   centeredSlides: false,
      // },
      1024: {
        slidesPerView: 'auto',
        spaceBetween: 34,
      }
    },
    centeredSlides: true,
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

// Слайдер с текстовыми отзывами
const reviewsSwiper = document.querySelector('.reviews-swiper');
if (reviewsSwiper) {
  var swiper3 = new Swiper(".reviews-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    autoHeight: true,
    loop: true,
    navigation: {
      nextEl: ".reviews-slider__button-next",
      prevEl: ".reviews-slider__button-prev",
    },
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".reviews-slider__pagination",
      clickable: true,
    },
  });
}
