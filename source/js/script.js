const sliderItems = document.querySelectorAll(`.clients__item`);
const sliderButtons = document.querySelectorAll(`.clients__counter-btn`);

const slider = (slides, dots) => {
  const currentSlide = document.querySelector(`.clients__item--active`);
  const currentDot = document.querySelector(`.clients__counter-btn--active`);
  let index = +currentDot.dataset.id;
  index = index < dots.length - 1 ? index : -1;
  currentSlide.classList.remove(`clients__item--active`);
  currentDot.classList.remove(`clients__counter-btn--active`);

  dots[index + 1].classList.add(`clients__counter-btn--active`);
  slides[index + 1].classList.add(`clients__item--active`);
};


setInterval(() => slider(sliderItems, sliderButtons),2000);

sliderButtons.forEach((btn) => {
  btn.addEventListener(`click`, () => slider(sliderItems, sliderButtons))
});

const performersItems = document.querySelectorAll(`.performers__item`);
const performersBtnPrev = document.querySelector(`.performers__nav-button--prev`);
const performersBtnNext = document.querySelector(`.performers__nav-button--next`);
const performersCounter = document.querySelector(`.performers__nav-counter`);

performersBtnPrev.addEventListener(`click`,  () => {
  const performersItemActive = document.querySelector(`.performers__item--active`);
  let index = +performersItemActive.dataset.id;
  performersItemActive.classList.remove(`performers__item--active`);
  index = index === 0 ? performersItems.length : index;
  performersItems[index - 1].classList.add(`performers__item--active`);
  performersCounter.textContent = `${index}/${performersItems.length}`;
});

performersBtnNext.addEventListener(`click`,  () => {
  const performersItemActive = document.querySelector(`.performers__item--active`);
  let index = +performersItemActive.dataset.id;
  performersItemActive.classList.remove(`performers__item--active`);
  index = index === performersItems.length - 1 ? -1 : index;
  performersItems[index + 1].classList.add(`performers__item--active`);
  performersCounter.textContent = `${index + 2}/${performersItems.length}`;
});
