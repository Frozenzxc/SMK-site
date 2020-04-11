export const setAnimOut = (elm) => {
  elm.querySelector(`.services__item-title`).style.animation = `slideInUp 1s ease`;
  elm.querySelector(`.services__item-text`).style.animation = `slideInUp 1s ease`;
  elm.querySelector(`.services__item-name`).style.animation = `slideInUp 1s ease`;
  elm.querySelector(`.services__feedback`).style.animation = `fadeOut 1s ease`;
  elm.querySelector(`.services__link`).style.animation = `fadeOut 1s ease`;
  elm.querySelector(`.services__video-play-btn`).style.animation = `fadeOut 1s ease`;
  elm.querySelector(`.services__item-photo`).style.animation = `imgMoveOut 1s ease`;
};

export const setAnimIn = (elm) => {
  elm.querySelector(`.services__item-title`).style.animation = `slideOutDown 1s ease`;
  elm.querySelector(`.services__item-text`).style.animation = `slideOutDown 1s ease`;
  elm.querySelector(`.services__item-name`).style.animation = `slideOutDown 1s ease`;
  elm.querySelector(`.services__feedback`).style.animation = `fadeIn 1s ease`;
  elm.querySelector(`.services__link`).style.animation = `fadeIn 1s ease`;
  elm.querySelector(`.services__video-play-btn`).style.animation = `fadeIn 1s ease`;
  elm.querySelector(`.services__item-photo`).style.animation = `fadeIn 1s ease`;
};

export const clearAnim = (elm) => {
  elm.querySelector(`.services__item-title`).style.animation = ``;
  elm.querySelector(`.services__item-text`).style.animation = ``;
  elm.querySelector(`.services__item-name`).style.animation = ``;
  elm.querySelector(`.services__feedback`).style.animation = ``;
  elm.querySelector(`.services__link`).style.animation = ``;
  elm.querySelector(`.services__video-play-btn`).style.animation = ``;
  elm.querySelector(`.services__item-photo`).style.animation = ``;
};

export const followingSlideClickAnim = (elm) => {
  elm.querySelector(`.services__item-title`).style.animation = `fadeOut 1s ease`;
  elm.querySelector(`.services__item-name`).style.animation = `fadeOut 1s ease`;
  elm.querySelector(`.services__item-photo`).style.animation = `imgMoveIn 1s ease`;
};

export const onNextSlideClickAnim = (elm) => {
  elm.querySelector(`.services__item-title`).style.animation = `fadeOut 1s ease`;
  elm.querySelector(`.services__item-name`).style.animation = `fadeOut 1s ease`;
  elm.querySelector(`.services__item-photo`).style.animation = `imgLongMoveIn 1s ease`;
};

export const slideOut = (elm) => {
  elm.style.animation = `slideOut 1s ease`;
};
