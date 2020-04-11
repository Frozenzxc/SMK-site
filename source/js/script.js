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
/*
const servicesThumbs = new Swiper(`.services__thumbs-container`, {
  preventInteractionOnTransition: true,
  multipleActiveThumbs: false,
  initialSlide: 1,
  direction: 'horizontal',
  spaceBetween: 55,
  slidesPerView: 2,
  loop: true,
  slideToClickedSlide: true,

  navigation: {
    nextEl: '.services__nav-button--next',
    prevEl: '.services__nav-button--prev',
  },
});

const servicesSlider = new Swiper ('.services__gallery-container', {
  preventInteractionOnTransition: true,
  initialSlide: 0,
  slidesPerView: 1,
  loop: true,
  speed: 1000,
  effect: `fade`,
  fadeEffect: {
    crossFade: true
  },

  navigation: {
    nextEl: '.services__nav-button--next',
    prevEl: '.services__nav-button--prev',
  },

  thumbs: {
    swiper: servicesThumbs
  },
});

servicesSlider.on(`slideChangeTransitionStart`, () => {
  const activeSlide = servicesSlider.wrapperEl.querySelector(`.swiper-slide-active`);
  activeSlide.querySelector(`.services__item-title`).style.animation = `slideOutDown 1s ease`;
  activeSlide.querySelector(`.services__item-text`).style.animation = `slideOutDown 1s ease`;
  activeSlide.querySelector(`.services__item-name`).style.animation = `slideOutDown 1s ease`;
  activeSlide.querySelector(`.services__feedback`).style.animation = `buttonsOut 1s ease`;
  activeSlide.querySelector(`.services__link`).style.animation = `buttonsOut 1s ease`;
  activeSlide.querySelector(`.services__video-play-btn`).style.animation = `fadeOut 1s ease`;
  activeSlide.querySelector(`.services__item-photo`).style.animation = `imgMoveOut 0.8s ease`;

});

servicesSlider.on(`slideChangeTransitionEnd`, () => {
  const activeSlide = servicesSlider.wrapperEl.querySelector(`.swiper-slide-active`);
  activeSlide.querySelector(`.services__item-title`).style.animation = `slideInUp 1s ease`;
  activeSlide.querySelector(`.services__item-text`).style.animation = `slideInUp 1s ease`;
  activeSlide.querySelector(`.services__item-name`).style.animation = `slideInUp 1s ease`;
  activeSlide.querySelector(`.services__feedback`).style.animation = `buttonsIn 1s ease`;
  activeSlide.querySelector(`.services__link`).style.animation = `buttonsIn 1s ease`;
  activeSlide.querySelector(`.services__video-play-btn`).style.animation = `fadeIn 1s ease`;
  activeSlide.querySelector(`.services__item-photo`).style.animation = `imgMoveIn 2s ease`;
});
*/
/*servicesThumbs.on(`slideChangeTransitionStart`, () => {
  const activeSlide = servicesThumbs.wrapperEl.querySelector(`.swiper-slide-active`);
  activeSlide.querySelector(`.services__thumbs-photo`).style.animation = `thumbsMoveIn 2s ease`;
  servicesThumbs.slideNext(1000, false);
});*/

/*const activeThumb = servicesThumbs.wrapperEl.querySelector(`.swiper-slide-active`);
const nextThumb = servicesThumbs.wrapperEl.querySelector(`.swiper-slide-next`);

activeThumb.addEventListener(`click`, (evt) => {
  evt.target.querySelector(`.services__thumbs-photo`).style.animation = `thumbsMoveIn 2s ease`;
  servicesThumbs.slideNext(1000, false);
});

nextThumb.addEventListener(`click`, (evt) => {
  evt.target.querySelector(`.services__thumbs-photo`).style.animation = `thumbsPrevMoveIn 1.3s linear`;
  servicesSlider.wrapperEl.querySelector(`.swiper-slide-active`).querySelector(`.services__item-photo`).style.animation = `imgMoveIn 2s ease 2s`;
  servicesThumbs.slideNext(500, false);
  servicesThumbs.slideNext(500, false);
});*/
/*
servicesThumbs.on(`click`, (evt) => {
  const selectedServiceCard = evt.target.closest(`li`);
  servicesThumbs.slideTo(servicesThumbs.realIndex);
     if (selectedServiceCard.classList.contains(`swiper-slide-active`)) {
       selectedServiceCard.querySelector(`.services__thumbs-photo`).style.animation = `thumbsMoveIn 2s ease`;
  } else {
       selectedServiceCard.querySelector(`.services__thumbs-photo`).style.animation = `thumbsPrevMoveIn 1.3s linear`;
       servicesThumbs.wrapperEl.querySelector(`.swiper-slide-active`).querySelector(`.services__thumbs-photo`).style.animation = `thumbsMoveOut 1s ease`;
  }
});

servicesThumbs.on(`slideChangeTransitionStart`, () => {
  const activeSlide = servicesThumbs.wrapperEl.querySelector(`.swiper-slide-active`);
  activeSlide.querySelector(`.services__thumbs-photo`).style.animation = `thumbsMoveIn 2s ease`;
});
*/
//clients block slider
const clientsSlider = new Swiper (`.clients__wrapper`, {
  preventInteractionOnTransition: true,
  initialSlide: 0,
  slidesPerView: 1,
  loop: true,
  speed: 1000,
  effect: `fade`,
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: `.clients__nav-button--next`,
    prevEl: `.clients__nav-button--prev`,
  },
});

clientsSlider.on(`slideChangeTransitionStart`, () => {
  const prevSlide = clientsSlider.wrapperEl.querySelector(`.swiper-slide-prev`);
  prevSlide.querySelector(`.clients__title`).style.animation = `clientsItemsOut 1s ease`;
  prevSlide.querySelector(`.clients__info`).style.animation = `clientsItemsOut 1s ease`;
  prevSlide.querySelector(`.clients__text-link`).style.animation = `clientsItemsOut 1s ease`;
  prevSlide.querySelector(`.clients__text`).style.animation = `clientsItemsOut 1s ease`;
  prevSlide.querySelector(`.clients__desc`).style.animation = `clientsItemsOut 1s ease`;
  prevSlide.querySelector(`.clients__image-wrapper`).style.animation = `clientsItemsOut 1s ease 0.1s`;
  prevSlide.querySelector(`.clients__btn-more`).style.animation = `clientsItemsOut 1s ease 0.3s`;
  prevSlide.querySelector(`.clients__next-case`).style.animation = `clientsItemsOut 1s ease 0.5s`;
});

clientsSlider.on(`slideChangeTransitionStart`, () => {
  const activeSlide = clientsSlider.wrapperEl.querySelector(`.swiper-slide-active`);
  activeSlide.querySelector(`.clients__title`).style.animation = `clientsItemsIn 1s ease`;
  activeSlide.querySelector(`.clients__info`).style.animation = `clientsItemsIn 1s ease`;
  activeSlide.querySelector(`.clients__text-link`).style.animation = `clientsItemsIn 1s ease`;
  activeSlide.querySelector(`.clients__text`).style.animation = `clientsItemsIn 1s ease`;
  activeSlide.querySelector(`.clients__desc`).style.animation = `clientsItemsIn 1s ease`;
  activeSlide.querySelector(`.clients__image-wrapper`).style.animation = `clientsItemsIn 1s ease`;
  activeSlide.querySelector(`.clients__btn-more`).style.animation = `clientsItemsIn 1s ease 0.2s`;
  activeSlide.querySelector(`.clients__next-case`).style.animation = `clientsItemsIn 1s ease 0.3s`;
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
