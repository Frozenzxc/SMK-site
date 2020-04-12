export const setAnimOut = (elm) => {
  elm.querySelector(`.services__item-title`).style.animation = `slideInUp 1s ease`;
  elm.querySelector(`.services__item-text`).style.animation = `slideInUp 1s ease`;
  elm.querySelector(`.services__item-name`).style.animation = `slideInUp 1s ease`;
  elm.querySelector(`.services__feedback`).style.animation = `fadeOut 1s linear`;
  elm.querySelector(`.services__link`).style.animation = `fadeOut 1s linear`;
  elm.querySelector(`.services__video-play-btn`).style.animation = `fadeOut 1s linear`;
  elm.querySelector(`.services__item-photo`).style.animation = `imgMoveOut 1s ease-in`;

  elm.querySelector(`.services__item-title`).addEventListener(`animationend`, () => {
    elm.querySelector(`.services__item-title`).style.animation = ``;
  });
  elm.querySelector(`.services__item-text`).addEventListener(`animationend`, () => {
    elm.querySelector(`.services__item-text`).style.animation = ``;
  });
  elm.querySelector(`.services__item-name`).addEventListener(`animationend`, () => {
    elm.querySelector(`.services__item-name`).style.animation = ``;
  });
  elm.querySelector(`.services__feedback`).addEventListener(`animationend`, () => {
    elm.querySelector(`.services__feedback`).style.animation = ``;
  });
  elm.querySelector(`.services__link`).addEventListener(`animationend`, () => {
    elm.querySelector(`.services__link`).style.animation = ``;
  });
  elm.querySelector(`.services__video-play-btn`).addEventListener(`animationend`, () => {
    elm.querySelector(`.services__video-play-btn`).style.animation = ``;
  });
  elm.querySelector(`.services__item-photo`).addEventListener(`animationend`, () => {
    elm.querySelector(`.services__item-photo`).style.animation = ``;
  });
};

export const setAnimIn = (elm) => {
  elm.querySelector(`.services__item-title`).style.animation = `slideOutDown 1s ease`;
  elm.querySelector(`.services__item-text`).style.animation = `slideOutDown 1s ease`;
  elm.querySelector(`.services__item-name`).style.animation = `slideOutDown 1s ease`;
  elm.querySelector(`.services__feedback`).style.animation = `fadeIn 1s linear`;
  elm.querySelector(`.services__link`).style.animation = `fadeIn 1s linear`;
  elm.querySelector(`.services__video-play-btn`).style.animation = `fadeIn 1.5s linear`;

  elm.querySelector(`.services__item-title`).addEventListener(`animationend`, () => {
    elm.querySelector(`.services__item-title`).style.animation = ``;
  });
  elm.querySelector(`.services__item-text`).addEventListener(`animationend`, () => {
    elm.querySelector(`.services__item-text`).style.animation = ``;
  });
  elm.querySelector(`.services__item-name`).addEventListener(`animationend`, () => {
    elm.querySelector(`.services__item-name`).style.animation = ``;
  });
  elm.querySelector(`.services__feedback`).addEventListener(`animationend`, () => {
    elm.querySelector(`.services__feedback`).style.animation = ``;
  });
  elm.querySelector(`.services__link`).addEventListener(`animationend`, () => {
    elm.querySelector(`.services__link`).style.animation = ``;
  });
  elm.querySelector(`.services__video-play-btn`).addEventListener(`animationend`, () => {
    elm.querySelector(`.services__video-play-btn`).style.animation = ``;
  });
};

export const clearAnim = (elm) => {
  elm.querySelector(`.services__item-title`).style.animation = ``;
  elm.querySelector(`.services__item-text`).style.animation = ``;
  elm.querySelector(`.services__item-name`).style.animation = ``;
  elm.querySelector(`.services__feedback`).style.animation = ``;
  elm.querySelector(`.services__link`).style.animation = ``;
  elm.querySelector(`.services__video-play-btn`).style.animation = ``;
  elm.querySelector(`.services__item-photo`).style.animation = ``;
  elm.style.animation = ``;
};

export const followingSlideClickAnim = (elm) => {
  elm.querySelector(`.services__item-title`).style.animation = `fadeOut 1s ease-in`;
  elm.querySelector(`.services__item-name`).style.animation = `fadeOut 1s ease-in`;
  elm.querySelector(`.services__item-photo`).style.animation = `imgMoveIn 1s ease-in`;

  elm.querySelector(`.services__item-title`).addEventListener(`animationend`, () => {
    elm.querySelector(`.services__item-title`).style.animation = ``;
  });
  elm.querySelector(`.services__item-name`).addEventListener(`animationend`, () => {
    elm.querySelector(`.services__item-name`).style.animation = ``;
  });
  elm.querySelector(`.services__item-photo`).addEventListener(`animationend`, () => {
    elm.querySelector(`.services__item-photo`).style.animation = ``;
  });
};

export const onNextSlideClickAnim = (elm) => {
  elm.querySelector(`.services__item-title`).style.animation = `fadeOut 1s ease-in`;
  elm.querySelector(`.services__item-name`).style.animation = `fadeOut 1s ease-in`;
  elm.querySelector(`.services__item-photo`).style.animation = `imgLongMoveIn 1s ease-in`;

  elm.querySelector(`.services__item-title`).addEventListener(`animationend`, () => {
    elm.querySelector(`.services__item-title`).style.animation = ``;
  });
  elm.querySelector(`.services__item-name`).addEventListener(`animationend`, () => {
    elm.querySelector(`.services__item-name`).style.animation = ``;
  });
  elm.querySelector(`.services__item-photo`).addEventListener(`animationend`, () => {
    elm.querySelector(`.services__item-photo`).style.animation = ``;
  });
};

export const followSlideOut = (elm) => {
  elm.style.animation = `slideOut 1s ease-in`;

  elm.addEventListener(`animationend`, () => {
    elm.style.animation = ``;
  });
};

export const nextSlideMove = (elm) => {
  elm.style.animation = `nextSlideMove 1s ease-in`;

  elm.addEventListener(`animationend`, () => {
    elm.style.animation = ``;
  });
};
