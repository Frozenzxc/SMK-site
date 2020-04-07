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

const visionCards = Array.from(document.querySelectorAll(`.vision__item`));

visionCards.forEach((card) => {
  card.addEventListener(`click`, (evt) => {
    const activeCard = document.querySelector(`.vision__item--active`);
    const currentCard = evt.target.closest('li');
    const cardCloseBtn = currentCard.querySelector(`.vision__close-btn`);

    activeCard && activeCard.classList.remove(`vision__item--active`);
    currentCard.classList.add(`vision__item--active`);

    cardCloseBtn.addEventListener(`click`, (e) => {
      e.stopPropagation();
      e.target.parentElement.classList.remove(`vision__item--active`);
    })
  })
});
