import React, {PureComponent} from "react";
import Slide from "../slide/slide.jsx";
import {TransitionGroup, CSSTransition} from "react-transition-group";

const sliderData = [
  {
    id: 0,
    title: `Маркетинг 1`,
    src: `img/Ekaterina.png`,
    name: `Екатерина`,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.`,
  },
  {
    id: 1,
    title: `Маркетинг 2`,
    src: `img/Irina.png`,
    name: `Екатерина`,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.`,
  },
  {
    id: 2,
    title: `Маркетинг 3`,
    src: `img/Ekaterina.png`,
    name: `Екатерина`,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.`,
  },
  {
    id: 3,
    title: `Маркетинг 4`,
    src: `img/Ekaterina.png`,
    name: `Екатерина`,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.`,
  },
  {
    id: 4,
    title: `SEO продвижение`,
    src: `img/Irina.png`,
    name: `Ирина`,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.`,
  },
  {
    id: 5,
    title: `Маркетинговые исследования`,
    src: `img/Aleksandr.png`,
    name: `Александр`,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.`,
  },
];

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeSlideIndex: 0,
      followingSlideIndex: 2,
      nextSlideIndex: 1,
      isActiveChange: false,
      activeSlides: [],
    };

    this.handleSlideClick = this.handleSlideClick.bind(this);
  }

  componentDidMount() {
    this.setState(() => ({
      activeSlides: sliderData.filter((slide) => {
        return slide.id === this.state.activeSlideIndex || slide.id === this.state.followingSlideIndex || slide.id === this.state.nextSlideIndex;
      })
    }));
  }

  handleSlideClick(index) {
    if (index !== this.state.activeSlideIndex) {
      this.setState((prevState) => ({
        isActiveChange: !prevState.isActiveChange,
      }));
    }

    const nextSlideIndex = index + 1 >= sliderData.length ? 0 : index + 1;
    const followingSlideIndex = nextSlideIndex + 1 >= sliderData.length ? 0 : nextSlideIndex + 1;
    setTimeout(() => {
      this.setState(() => ({
        activeSlideIndex: index,
        followingSlideIndex,
        nextSlideIndex,
        activeSlides: sliderData.filter((slide) => {
          return slide.id === index || slide.id === followingSlideIndex || slide.id === nextSlideIndex;
        })
      }));

    }, 1000);
  }

  render() {
    const {activeSlideIndex, activeSlides, isActiveChange, followingSlideIndex, nextSlideIndex} = this.state;


    return (
      <div className="services__wrapper container">
        <h2 className="services__title">
                    Service
        </h2>
        <h2 className="services__subtitle">Service & Team</h2>
        <ul className="services__list swiper-wrapper">
          {activeSlides.map((slide) => (
            <Slide
              key={slide.id}
              slide={slide}
              isActive={slide.id === activeSlideIndex}
              isSlideChange={isActiveChange}
              isFollowing={slide.id === followingSlideIndex}
              isNext={slide.id === nextSlideIndex}
              onSlideClick={this.handleSlideClick}
            />
          )
          )}
        </ul>
        <div className="services__nav-wrapper">
          <button className="services__nav-button services__nav-button--prev swiper-button-prev"
            type="button">Предыдущий
          </button>
          <button className="services__nav-button services__nav-button--next swiper-button-next"
            type="button">Следующий
          </button>
        </div>
      </div>
    );
  }
}

export default App;
