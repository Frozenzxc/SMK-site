import React, {PureComponent} from "react";
import Slide from "../slide/slide.jsx";
import {slides} from "../../slides";
import {SlideType} from "../../const";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeSlideIndex: 0,
      followingSlideIndex: 2,
      nextSlideIndex: 1,
      clickedSlide: ``,
      activeSlides: [],
    };

    this.handleSlideClick = this.handleSlideClick.bind(this);
    this.handleNextSlideBtnClick = this.handleNextSlideBtnClick.bind(this);
  }

  componentDidMount() {
    this.setState(() => ({
      activeSlides: slides.filter((slide) => {
        return slide.id === this.state.activeSlideIndex || slide.id === this.state.followingSlideIndex || slide.id === this.state.nextSlideIndex;
      })
    }));
  }

  handleNextSlideBtnClick() {
    this.setState(() => ({
      clickedSlide: SlideType.NEXT,
    }));

    const activeSlideIndex = this.state.activeSlideIndex + 1 >= slides.length ? 0 : this.state.activeSlideIndex + 1;
    const nextSlideIndex = this.state.followingSlideIndex;
    const followingSlideIndex = nextSlideIndex + 1 >= slides.length ? 0 : nextSlideIndex + 1;
    setTimeout(() => {
      this.setState(() => ({
        clickedSlide: ``,
        activeSlideIndex,
        followingSlideIndex,
        nextSlideIndex,
        activeSlides: slides.filter((slide) => {
          return slide.id === activeSlideIndex || slide.id === followingSlideIndex || slide.id === nextSlideIndex;
        })
      }));
    }, 1000);
  }

  handleSlideClick(index) {
    let nextSlideIndex;
    let followingSlideIndex;

    if (index !== this.state.activeSlideIndex) {
      let clicked;
      if (index === this.state.nextSlideIndex) {
        nextSlideIndex = this.state.followingSlideIndex;
        followingSlideIndex = nextSlideIndex + 1 >= slides.length ? 0 : nextSlideIndex + 1;
        clicked = SlideType.NEXT;
      } else {
        nextSlideIndex = this.state.followingSlideIndex + 1 >= slides.length ? 0 : this.state.followingSlideIndex + 1;
        followingSlideIndex = nextSlideIndex + 1 >= slides.length ? 0 : nextSlideIndex + 1;
        clicked = SlideType.FOLLOW;
      }
      this.setState(() => ({
        clickedSlide: clicked,
      }));
    }


    setTimeout(() => {
      this.setState(() => ({
        clickedSlide: ``,
        activeSlideIndex: index,
        followingSlideIndex,
        nextSlideIndex,
        activeSlides: slides.filter((slide) => {
          return slide.id === index || slide.id === followingSlideIndex || slide.id === nextSlideIndex;
        })
      }));

    }, 1000);
  }

  render() {
    const {activeSlideIndex, activeSlides, clickedSlide, followingSlideIndex, nextSlideIndex} = this.state;


    return (
      <div className="services__wrapper container">
        <h2 className="services__title">
                    Service
        </h2>
        <h2 className="services__subtitle">Service & Team</h2>
        <ul className="services__list">
          {activeSlides.map((slide) => (
            <Slide
              key={slide.id}
              slide={slide}
              isActive={slide.id === activeSlideIndex}
              clickedSlide={clickedSlide}
              isFollowing={slide.id === followingSlideIndex}
              isNext={slide.id === nextSlideIndex}
              onSlideClick={this.handleSlideClick}
            />
          )
          )}
        </ul>
        <div className="services__nav-wrapper">
          <button className="services__nav-button services__nav-button--next"
            type="button" onClick={this.handleNextSlideBtnClick}>Следующий
          </button>
        </div>
        <div className="services__count-wrapper page-count__wrapper">
          <span className="services__page-number page-number">2</span>
          <span className="services__page-count page-count">6</span>
        </div>
      </div>
    );
  }
}

export default App;
