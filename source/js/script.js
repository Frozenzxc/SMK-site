const modalOverlay = document.querySelector(`#modal-overlay`);

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

const serviceCards = Array.from(document.querySelectorAll(`.services__item`));

serviceCards.forEach((card) => {
  card.addEventListener(`click`, (evt) => {

    const currentPrePrevCard = document.querySelector(`.services__item--pre-prev`);
    const currentPrevCard = document.querySelector(`.services__item--prev`);
    const currentServiceCard = document.querySelector(`.services__item--active`);
    /*const prevActiveCardChildren = currentServiceCard.children;
    [...prevActiveCardChildren].forEach((child) => {
      if (child.tagName === `IMG`) {
        child.style.animation = `fade-out 0.8s ease`;
      } else {
        child.style.animation = `roll-out 0.8s ease`;
      }
    });*/


    if (evt.target.dataset.id !== currentServiceCard.dataset.id) {
      const currentCard = evt.target.closest('li');
      const index = Number(currentCard.dataset.id);
      const prevIndex = index - 1 >= 0 ? index - 1 : serviceCards.length - 1;
      const prePrevIndex = prevIndex - 1 >= 0 ? prevIndex - 1 : serviceCards.length - 1;
      const currentCardChildren = currentCard.children;


      currentServiceCard.classList.remove(`services__item--active`);
      currentPrePrevCard.classList.remove(`services__item--pre-prev`);
      currentPrevCard.classList.remove(`services__item--prev`);
      currentCard.classList.add(`services__item--active`);
      serviceCards[prePrevIndex].classList.add(`services__item--pre-prev`);
      serviceCards[prevIndex].classList.add(`services__item--prev`);

      /*[...currentCardChildren].forEach((child, index) => {
        if (child.tagName === `IMG`) {
          child.style.animation = `move-in 0.9s ease`;
        } else {
          child.style.animation = `roll-in 0.9s ease-out`;
        }
        child.addEventListener(`animationend`, () => {

          //currentServiceCard.style.transform = currentCard.style.transform;



          child.style.animation = `none`;
        });
      })*/
    }
  });
});



/*
// elements being modified
const image = document.querySelector('img');
const item = document.querySelector('.item');
const itemType = item.querySelector('.type');
const itemName = item.querySelector('.name');
const itemDescription = item.querySelector('.description');
// buttons allowing to change the slide
const buttons = document.querySelectorAll('button');


// index to update the slide with the respective image
let index = 0;
// isTransitioning to avoid firing the transition before it has a chance to finish
let isTransitioning = false;
// identifiers for the interval and timeout, determining the interplay between clicking the controls' buttons and letting the page update the slide
let intervalID = 0;
let timeoutID = 0;

// function called in response to the changeItem() function, to show the image at the precise position of the array
function showItem(number) {
  // set isTransitioning to true to prevent a click event from running the function again before the animation is completed
  isTransitioning = true;

  // retrieve the existing type to animate the larger overlay if the new type is different
  const previousType = itemType.textContent.toLowerCase();
  // retrieve the necessary values from the array's object
  const { src, type, name } = images[number];
  // retrieve a random adjective
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];

  // dictate the overlay on the basis of the type (larger overlay if the previous and current type don't match)
  const overlay = previousType === type ? document.querySelector('.overlay--s') : document.querySelector('.overlay--l');
  // animate the overlay to stretch to scaleX 1 and back to 0
  overlay.style.animation = 'overlay 1s 2 ease-in-out alternate';
  // after the animation is complete, remove it to have a chance to play the animation once again
  overlay.addEventListener('animationend', () => {
    overlay.style.animation = 'none';
    // update isTransitioning to have the button potentially restart the whole process
    isTransitioning = false;
  });

  // target the headings and paragraphs
  const itemChildren = item.children;
  // animate them to scroll out and back into view
  [...itemChildren].forEach((child, index) => {
    child.style.animation = `rollIn 0.9s ${index * 0.15}s 2 alternate-reverse ease-out both`;
    // remove the animation once it is complete
    child.addEventListener('animationend', () => child.style.animation = 'none');
  })

  // set a timeout to update the image whilst the overlay is imposed atop it and update the text elements while they are transitioned out of sight
  const timeoutAnimation = setTimeout(() => {
    // update the desired information
    image.src = src;
    // ! specify the alt attribute to match the name
    image.setAttribute('alt', `${adjective} ${name}`);
    itemType.textContent = type;
    itemName.textContent = `${adjective} ${name}`;
    clearTimeout(timeoutAnimation);
  }, 900);
}

// function called in response to either a click event on the button or the interval
function changeItem(direction = 'next') {
  // update the index on the basis of the direction and the boundaries of the images array
  if (direction === 'prev') {
    index = index > 0 ? index - 1 : (images.length - 1);
  }
  if (direction === 'next') {
    index = index < (images.length - 1) ? index + 1 : 0;
  }
  // call the function to show the desired image
  showItem(index);
}

// listen for a click event on every control button
buttons.forEach(button => button.addEventListener('click', () => {
  // pre-emptively terminate the function if the slider is still transitioning
  if (isTransitioning) {
    return false;
  }
  // clear the interval to have the user in control of the sliding animation
  clearInterval(intervalID);
  // set up a timeout to re-start the interval after a while
  timeoutID = setTimeout(() => {
    runInterval();
    clearTimeout(timeoutID);
  }, 5000);

  // retrieve the data-action attribute
  const action = button.getAttribute('data-action');
  // call the function updating the index based on the input direction
  changeItem(action);
}));

// function running the interval allowing to change the item every so often
function runInterval() {
  // start the interval
  // ! update the identifier to have the button potentially clear the interval through the updated value
  intervalID = setInterval(() => {
    // call the changeItem() function to go to the next image
    changeItem();
  }, 5000);
}
// immediately call the function running the interval
runInterval();
*/
