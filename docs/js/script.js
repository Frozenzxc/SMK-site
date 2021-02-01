// burger menu scroll
const burgerTrigger = document.querySelector(`.main-nav__toggle-trigger`);
window.addEventListener(`scroll`, () => {
  if (scrollY > 1) {
    burgerTrigger.classList.add(`main-nav__toggle-trigger--scrolled`);
  } else {
    burgerTrigger.classList.remove(`main-nav__toggle-trigger--scrolled`);
  }
});

// services
const ANIMATION_TIMEOUT = 1000;
const SlidePosition = {
  NEXT: `next`,
  FOLLOW: `follow`,
};

const slideClickHandler = (index, position) => {
  const activeSlide = document.querySelector(`.services__item--active`);
  const nextSlide = document.querySelector(`.services__item--next`);
  const followSlide = document.querySelector(`.services__item--follow`);

  if (position === SlidePosition.NEXT) {
    activeSlide.classList.add(`anim-active-out`);
    nextSlide.classList.add(`anim-next-in`);
    followSlide.classList.add(`anim-follow-move`);
  } else {
    activeSlide.classList.add(`anim-active-out`);
    nextSlide.classList.add(`anim-next-out`);
    followSlide.classList.add(`anim-follow-in`);
  }

  setTimeout(() => {
    activeSlide.classList.remove(`anim-active-out`);
    nextSlide.classList.remove(`anim-next-in`);
    followSlide.classList.remove(`anim-follow-move`);
    nextSlide.classList.remove(`anim-next-out`);
    followSlide.classList.remove(`anim-follow-in`);
    servicesSlider.slideTo(index);
  }, ANIMATION_TIMEOUT);
};

const servicesSlider = new Swiper(`.services__wrapper`, {
  init: false,
  preventInteractionOnTransition: true,
  initialSlide: 3,
  slidesPerView: 3,
  loop: false,
  speed: 1000,
  effect: `fade`,
  fadeEffect: {
    crossFade: true
  },
  slideClass: `services__item`,
  slideActiveClass: `services__item--active`,
});

servicesSlider.on(`init`, () => {

  const index = servicesSlider.activeIndex;
  const nextIndex = index + 1 > servicesSlider.slides.length - 1 ? 0 : index + 1;
  const followIndex = nextIndex + 1 > servicesSlider.slides.length - 1 ? 0 : nextIndex + 1;
  const nextSlide = servicesSlider.slides[nextIndex];
  const followSlide = servicesSlider.slides[followIndex];
  nextSlide.classList.add(`services__item--next`);
  followSlide.classList.add(`services__item--follow`);
});

servicesSlider.init();

servicesSlider.on(`slideChange`, () => {
  const index = servicesSlider.activeIndex;
  const nextIndex = index + 1 > servicesSlider.slides.length - 1 ? 0 : index + 1;
  const followIndex = nextIndex + 1 > servicesSlider.slides.length - 1 ? 0 : nextIndex + 1;
  const currentNextSlide = document.querySelector(`.services__item--next`);
  const currentFollowSlide = document.querySelector(`.services__item--follow`);

  currentNextSlide.classList.remove(`services__item--next`);
  currentFollowSlide.classList.remove(`services__item--follow`);

  servicesSlider.slides[nextIndex].classList.add(`services__item--next`);
  servicesSlider.slides[followIndex].classList.add(`services__item--follow`);
});

servicesSlider.on(`slideChangeTransitionStart`, () => {
  const index = servicesSlider.activeIndex;

  servicesSlider.slides[index].classList.add(`anim-active-in`);
});

servicesSlider.on(`click`, (evt) => {
  const clickedSlide = evt.target.closest(`li`);
  const index = servicesSlider.activeIndex;
  const nextIndex = index + 1 > servicesSlider.slides.length - 1 ? 0 : index + 1;
  const followIndex = nextIndex + 1 > servicesSlider.slides.length - 1 ? 0 : nextIndex + 1;

  if (clickedSlide && clickedSlide.classList.contains(`services__item--next`)) {
    slideClickHandler(nextIndex, SlidePosition.NEXT);
  } else if (clickedSlide && clickedSlide.classList.contains(`services__item--follow`)) {
    slideClickHandler(followIndex, SlidePosition.FOLLOW);
  }
});

const servicesBtnNext = document.querySelector(`.services__nav-button--next`);
servicesBtnNext.addEventListener(`click`, () => {
  if (servicesSlider.activeIndex + 1 > servicesSlider.slides.length - 1) {
    slideClickHandler(0, SlidePosition.NEXT);
  } else {
    slideClickHandler(servicesSlider.activeIndex + 1, SlidePosition.NEXT);
  }
});

const servicesCards = [...document.querySelectorAll(`.services__item`)];
const modalOverlay = document.querySelector(`.modal-overlay`);

servicesCards.forEach((card) => {
  const cardModal = card.querySelector(`.services__modal`);
  const modalOpenBtn = card.querySelector(`.services__btn-more`);
  const modalCloseBtn = card.querySelector(`.services__modal-close-btn`);


  modalOpenBtn.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    cardModal.classList.add(`services__modal--show`);
    modalOverlay.classList.remove(`modal-close`);
    servicesBtnNext.classList.add(`services__nav-button--disabled`);
    servicesBtnNext.disabled = true;

    modalOverlay.addEventListener(`click`, () => {
      modalOverlay.classList.add(`modal-close`);
      cardModal.classList.remove(`services__modal--show`);
      servicesBtnNext.classList.remove(`services__nav-button--disabled`);
      servicesBtnNext.disabled = false;
    });

    modalCloseBtn.addEventListener(`click`, () => {
      modalOverlay.classList.add(`modal-close`);
      cardModal.classList.remove(`services__modal--show`);
      servicesBtnNext.classList.remove(`services__nav-button--disabled`);
      servicesBtnNext.disabled = false;
    });
  });
});

// preview input
const previewInput = document.querySelector(`.preview__form-input`);
previewInput.addEventListener(`change`, () => {
  document.querySelector(`.preview__form-placeholder`).style.display = `none`;
});

// vision cards

const visionCards = [...document.querySelectorAll(`.vision__item`)];

visionCards.forEach((card) => {
  /* const cardModal = card.querySelector(`.clients__modal`);
  const modalOpenBtn = card.querySelector(`.clients__text-link`);
  const additionalOpenBtn = card.querySelector(`.clients__additional-link`);
  const modalCloseBtn = card.querySelector(`.clients__modal-close-btn`);*/
  const visionModalOverlay = document.querySelector(`.vision__modal-overlay`);
  const cardCloseBtn = card.querySelector(`.vision__close-btn`);

  card.addEventListener(`click`, (evt) => {
    /*const currentActiveCard = document.querySelector(`.vision__item--active`);
    if (currentActiveCard) {
      currentActiveCard.classList.remove(`vision__item--active`);
    }
*/
    if (evt.target !== cardCloseBtn) {
      card.classList.add(`vision__item--active`);
      visionModalOverlay.classList.remove(`modal-close`);
    } else {
      card.classList.remove(`vision__item--active`);
      visionModalOverlay.classList.add(`modal-close`);
    }

    visionModalOverlay.addEventListener(`click`, () => {
      visionModalOverlay.classList.add(`modal-close`);
      card.classList.remove(`vision__item--active`);
    });
  });

/*
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
  });*/
});


// clients block text toggle
const clientsTextOpenBtn = document.querySelector(`.clients__info-toggle`);
const clientsText = document.querySelector(`.clients__text`);
const clientsTextCloseBtn = document.querySelector(`.clients__text-toggle`);
const clientsNav = document.querySelector(`.clients__nav-wrapper`);

clientsTextOpenBtn.addEventListener(`click`, () => {
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

// clients block slider
const clientsSlider = new Swiper(`.clients__wrapper`, {
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

// blog block slider
const blogThumbs = new Swiper(`.blog__thumbs-container`, {
  centeredSlides: true,
  direction: `horizontal`,
  spaceBetween: 24,
  slidesPerView: `auto`,
  loop: true,
  freeMode: true,
  navigation: {
    nextEl: `.blog__nav-button--next`,
    prevEl: `.blog__nav-button--prev`,
  },
});

const blogSlider = new Swiper(`.blog__list-container`, {
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
