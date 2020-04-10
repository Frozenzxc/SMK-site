//global const
const modalOverlay = document.querySelector(`#modal-overlay`);

//clients block text toggle
const clientsTextOpenBtn = document.querySelector(`.clients__info-toggle`);
const clientsText = document.querySelector(`.clients__text`);
const clientsTextCloseBtn = document.querySelector(`.clients__text-toggle`);
const clientsNav = document.querySelector(`.clients__nav-wrapper`);

clientsTextOpenBtn.addEventListener(`click`, (evt) => {
  clientsText.style.display = `block`;
  clientsTextOpenBtn.style.display = `none`;
  clientsNav.style.left = `29px`;
  clientsNav.style.right = ``;
  clientsNav.style.bottom = `37px`;


  clientsTextCloseBtn.addEventListener(`click`, () => {
    clientsText.style.display = `none`;
    clientsTextOpenBtn.style.display = `block`;
    clientsNav.style.left = ``;
    clientsNav.style.right = `71px`;
    clientsNav.style.bottom = `27px`;
  });
});

//vision block cards toggle
const visionCards = Array.from(document.querySelectorAll(`.vision__item`));
let activeVisionCard = null;

visionCards.forEach((card) => {
  card.addEventListener(`click`, (evt) => {
    const currentCard = evt.target.closest('li');
    activeVisionCard = currentCard.cloneNode(true);
    const cardCloseBtn = activeVisionCard.querySelector(`.vision__close-btn`);

    activeVisionCard.classList.remove(`vision__item`);
    activeVisionCard.classList.add(`vision__item--active`);
    debugger;
    currentCard.parentElement.append(activeVisionCard);
    modalOverlay.classList.toggle(`modal-close`);

    cardCloseBtn.addEventListener(`click`, (e) => {
      e.stopPropagation();
      modalOverlay.classList.toggle(`modal-close`);
      activeVisionCard.remove();
    });
  })
});

modalOverlay.addEventListener(`click`, () => {
  modalOverlay.classList.toggle(`modal-close`);
  activeVisionCard.remove();
});

//services block slider

const servicesThumbs = new Swiper(`.services__thumbs-container`, {

  direction: 'horizontal',
  spaceBetween: 55,
  slidesPerView: 2,
  loop: true,
  freeMode: true,
  slideToClickedSlide: true,
  navigation: {
    nextEl: '.services__nav-button--next',
    prevEl: '.services__nav-button--prev',
  },
});

const servicesSlider = new Swiper ('.services__gallery-container', {
  // Optional parameters
  slidesPerView: 1,
  loop: true,
  speed: 1000,
  effect: `fade`,
  fadeEffect: {
    crossFade: true
  },
  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: '.services__nav-button--next',
    prevEl: '.services__nav-button--prev',
  },
  thumbs: {
    swiper: servicesThumbs
  },
  on: {
    progress: function(data)  {
      console.log('event progress', data);
    }
  }
});

const servicesNavBtnNext = document.querySelector(`.services__nav-button--next`);

servicesNavBtnNext.addEventListener(`click`, () => {
  const activeSlide = servicesSlider.wrapperEl.querySelector(`.swiper-slide-prev`);
  activeSlide.querySelector(`.services__item-title`).style.animation = `slideOutDown 1s ease`;
  activeSlide.querySelector(`.services__item-text`).style.animation = `slideOutDown 1s ease`;
  activeSlide.querySelector(`.services__item-name`).style.animation = `slideOutDown 1s ease`;
  activeSlide.querySelector(`.services__feedback`).style.animation = `buttonsOut 1s ease`;
  activeSlide.querySelector(`.services__link`).style.animation = `buttonsOut 1s ease`;
  activeSlide.querySelector(`.services__video-play-btn`).style.animation = `fadeOut 1s ease`;
  activeSlide.querySelector(`.services__item-photo`).style.animation = `imgMoveOut 0.8s ease`;

  /*activeSlide.addEventListener(`animationend`, () => {
    [...activeSlide.children].forEach((child) => child.style.animation = ``);
    servicesSlider.slideNext();
  });*/

});

/*servicesSlider.on(`slideChange`, () => {
  const activeSlide = servicesSlider.wrapperEl.querySelector(`.swiper-slide-active`);
  activeSlide.querySelector(`.services__item-title`).style.animation = `slideOutDown 1s ease`;
});*/

servicesSlider.on(`slideChangeTransitionStart`, () => {
  const activeSlide = servicesSlider.wrapperEl.querySelector(`.swiper-slide-active`);
  activeSlide.querySelector(`.services__item-title`).style.animation = `slideInUp 1s ease`;
  activeSlide.querySelector(`.services__item-text`).style.animation = `slideInUp 1s ease`;
  activeSlide.querySelector(`.services__item-name`).style.animation = `slideInUp 1s ease`;
  activeSlide.querySelector(`.services__feedback`).style.animation = `buttonsIn 1s ease`;
  activeSlide.querySelector(`.services__link`).style.animation = `buttonsIn 1s ease`;
  activeSlide.querySelector(`.services__video-play-btn`).style.animation = `fadeIn 1s ease`;
  /*activeSlide.querySelector(`.services__item-photo`).style.animation = `imgMoveOut 0.8s ease`;*/
});

/*servicesSlider.on(`slideChange`, () => {
  const activeSlide = servicesSlider.wrapperEl.querySelector(`.swiper-slide-active`);
  const prevSlide = servicesSlider.wrapperEl.querySelector(`.swiper-slide-prev`);
  const nextSlide = servicesSlider.wrapperEl.querySelector(`.swiper-slide-next`);
  activeSlide.style.animation = `roll-out 2s ease`;
  activeSlide.addEventListener(`animationend`, () => {
    activeSlide.style.animation = ``;
    prevSlide.style.animation = `roll-in 2s ease`;
    nextSlide.style.animation = `roll-in 2s ease`;
    prevSlide.addEventListener(`animationend`, () => {
      prevSlide.style.animation = ``;
      nextSlide.style.animation = ``;
    });
    nextSlide.addEventListener(`animationend`, () => {
      prevSlide.style.animation = ``;
      nextSlide.style.animation = ``;
    });
  });
});*/

/*servicesSlider.on(`slideChange`, () => {
  const activeSlide = servicesSlider.wrapperEl.querySelector(`.swiper-slide-active`);
  debugger;
  activeSlide.style.animation = `roll-out 2s ease`;
  activeSlide.addEventListener(`animationend`, () => activeSlide.style.animation = ``);
});

servicesSlider.on(`slideChangeTransitionStart`, () => {
  const activeSlide = servicesSlider.wrapperEl.querySelector(`.swiper-slide-active`);
  debugger;
  activeSlide.style.animation = `roll-in 2s ease`;
  activeSlide.addEventListener(`animationend`, () => activeSlide.style.animation = ``);
});*/

/*const servicesWrapper = document.querySelector(`.services__list`);

servicesWrapper.addEventListener(`click`, (evt) => {
  const currentServiceCard = servicesWrapper.querySelector(`.services__item--active`);
  const selectedServiceCard = evt.target.closest('li');
  currentServiceCard.classList.remove(`services__item--active`);
  selectedServiceCard.classList.add(`services__item--active`);
  servicesSlider.slideTo(servicesSlider.clickedIndex);
});*/


//clients block slider
const clientsSlider = new Swiper (`.clients__wrapper`, {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: `.clients__nav-button--next`,
    prevEl: `.clients__nav-button--prev`,
  },
});

//blog block slider
const blogThumbs = new Swiper(`.blog__thumbs-container`, {
  centeredSlides: true,
  direction: 'horizontal',
  spaceBetween: 24,
  slidesPerView: `auto`,
  loop: true,
  freeMode: true,
  navigation: {
    nextEl: `.blog__nav-button--next`,
    prevEl: `.blog__nav-button--prev`,
  },
});

const blogSlider = new Swiper (`.blog__list-container`, {
  slidesPerView: 1,
  loop: true,

  navigation: {
    nextEl: `.blog__nav-button--next`,
    prevEl: `.blog__nav-button--prev`,
  },
  thumbs: {
    swiper: blogThumbs
  },
  pagination: {
    el: `.blog__counter`,
    clickable: true,
    bulletClass: `blog__counter-item`,
    bulletActiveClass: `blog__counter-item--active`,
    renderBullet: (index, className) => {
      return `<span class="` + className + `">0` + (index + 1) + `</span>`;
    },
  }
});
