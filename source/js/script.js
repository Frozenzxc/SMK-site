//burger menu scroll
const burgerTrigger = document.querySelector(`.main-nav__toggle-trigger`);
window.addEventListener(`scroll`, () => {
  if (scrollY > 1) {
    burgerTrigger.classList.add(`main-nav__toggle-trigger--scrolled`);
  } else {
    burgerTrigger.classList.remove(`main-nav__toggle-trigger--scrolled`);
  }
});

//services

const servicesCards = [...document.querySelectorAll(`.services__item`)];

servicesCards.forEach((card) => {
  const cardModal = card.querySelector(`.services__modal`);
  const modalOpenBtn = card.querySelector(`.services__btn-more`);
  const modalCloseBtn = card.querySelector(`.services__modal-close-btn`);
  const modalOverlay = card.querySelector(`.services__modal-overlay`);

  modalOpenBtn.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    cardModal.classList.add(`services__modal--show`);
    modalOverlay.classList.toggle(`modal-close`);

    modalOverlay.addEventListener(`click`, () => {
      modalOverlay.classList.toggle(`modal-close`);
      cardModal.classList.remove(`services__modal--show`);
    });

    modalCloseBtn.addEventListener(`click`, () => {
      modalOverlay.classList.toggle(`modal-close`);
      cardModal.classList.remove(`services__modal--show`);
    });
  });
});

//preview input
const previewInput = document.querySelector(`.preview__form-input`);
previewInput.addEventListener(`change`, () => {
  document.querySelector(`.preview__form-placeholder`).style.display = `none`;
});


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

const clientsCards = [...document.querySelectorAll(`.clients__item`)];

clientsCards.forEach((card) => {
  const cardModal = card.querySelector(`.clients__modal`);
  const modalOpenBtn = card.querySelector(`.clients__text-link`);
  const additionalOpenBtn = card.querySelector(`.clients__additional-link`);
  const modalCloseBtn = card.querySelector(`.clients__modal-close-btn`);
  const modalOverlay = card.querySelector(`.clients__modal-overlay`);

  modalOpenBtn.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    cardModal.classList.add(`clients__modal--show`);
    modalOverlay.classList.remove(`modal-close`);

    modalOverlay.addEventListener(`click`, () => {
      modalOverlay.classList.add(`modal-close`);
      cardModal.classList.remove(`clients__modal--show`);
    });

    modalCloseBtn.addEventListener(`click`, () => {
      modalOverlay.classList.add(`modal-close`);
      cardModal.classList.remove(`clients__modal--show`);
    });
  });

  additionalOpenBtn.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    cardModal.classList.add(`clients__modal--show`);
    modalOverlay.classList.remove(`modal-close`);

    modalOverlay.addEventListener(`click`, () => {
      modalOverlay.classList.add(`modal-close`);
      cardModal.classList.remove(`clients__modal--show`);
    });

    modalCloseBtn.addEventListener(`click`, () => {
      modalOverlay.classList.add(`modal-close`);
      cardModal.classList.remove(`clients__modal--show`);
    });
  });
});

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
  prevSlide.querySelector(`.clients__title`).style.animation = `clientsItemsOut 1.3s ease`;
  prevSlide.querySelector(`.clients__info`).style.animation = `clientsItemsOut 1.3s ease`;
  prevSlide.querySelector(`.clients__text-link`).style.animation = `clientsItemsOut 1.3s ease`;
  prevSlide.querySelector(`.clients__text`).style.animation = `clientsItemsOut 1.3s ease`;
  prevSlide.querySelector(`.clients__desc`).style.animation = `clientsItemsOut 1.3s ease`;
  prevSlide.querySelector(`.clients__image-wrapper`).style.animation = `clientsItemsOut 1.3s ease 1.3s`;
  prevSlide.querySelector(`.clients__btn-more`).style.animation = `clientsItemsOut 1.3s ease 1.3s`;
  prevSlide.querySelector(`.clients__next-case`).style.animation = `clientsItemsOut 1.3s ease`;
});

clientsSlider.on(`slideChangeTransitionStart`, () => {
  const activeSlide = clientsSlider.wrapperEl.querySelector(`.swiper-slide-active`);
  activeSlide.querySelector(`.clients__title`).style.animation = `clientsItemsIn 1.3s ease`;
  activeSlide.querySelector(`.clients__info`).style.animation = `clientsItemsIn 1.3s ease`;
  activeSlide.querySelector(`.clients__text-link`).style.animation = `clientsItemsIn 1.3s ease`;
  activeSlide.querySelector(`.clients__text`).style.animation = `clientsItemsIn 1.3s ease`;
  activeSlide.querySelector(`.clients__desc`).style.animation = `clientsItemsIn 1.3s ease`;
  activeSlide.querySelector(`.clients__image-wrapper`).style.animation = `clientsItemsIn 1.3s ease`;
  activeSlide.querySelector(`.clients__btn-more`).style.animation = `clientsItemsIn 1.3s ease`;
  activeSlide.querySelector(`.clients__next-case`).style.animation = `clientsItemsIn 1.3s ease`;
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
