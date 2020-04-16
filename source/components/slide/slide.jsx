import React, {Component} from "react";
import PropTypes from "prop-types";
import {
  clearAnim,
  followingSlideClickAnim, followSlideOut,
  onNextSlideClickAnim,
  setAnimIn,
  setAnimOut,
  nextSlideMove
} from "../../animation";
import {SlideType} from "../../const";


class Slide extends Component {
  constructor(props) {
    super(props);
    this.slide = React.createRef();

    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    clearAnim(this.slide.current);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isActive) {
      setAnimOut(this.slide.current);
    } else if (this.props.clickedSlide === SlideType.NEXT) {
      if (prevProps.isFollowing) {
        nextSlideMove(this.slide.current);
      } else if (prevProps.isNext) {
        followingSlideClickAnim(this.slide.current);
      }
    } else if (this.props.clickedSlide === SlideType.FOLLOW) {
      if (prevProps.isFollowing) {
        onNextSlideClickAnim(this.slide.current);
      } else if (prevProps.isNext) {
        followSlideOut(this.slide.current);
      }
    }


  }

  shouldComponentUpdate(nextProps) {
    if (!this.props.isActive && nextProps.isActive) {
      setAnimIn(this.slide.current);
      return true;
    }

    return true;
  }

  onClick() {
    const {onSlideClick, slide} = this.props;

    onSlideClick(slide.id);
  }

  render() {
    const {isActive, isFollowing, isNext, slide} = this.props;

    return (
      <li
        className={`${isActive && `services__item--active`} ${isFollowing && `services__item--follow`} ${isNext && `services__item--next`} services__item`}
        onClick={!isActive ? this.onClick : () => {}}
        ref={this.slide}
      >
        <h3 className="services__item-title">
          {slide.title}
        </h3>
        <img className="services__item-photo" src={slide.src} width="242" height="300"
          alt={slide.name}/>
        <p className="services__item-name">{slide.name}</p>
        <p className="services__item-text">
          {slide.text}
          <a className="services__btn-more" href="#">Подробнее</a>
        </p>
        <a className="services__feedback button" href="#">Обсудить проект</a>
        <a className="services__link">Посмотреть все услуги</a>
        <a className="services__video-play-btn" href="#">Посмотреть видео об услуге</a>
        <div className="services__modal">
          <h3 className="services__modal-title">Маркетинговые исследования</h3>
          <p className="services__modal-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore
          </p>
          <a className="services__modal-link" href="#">Обсудить проект</a>
          <button className="services__modal-close-btn" type="button">Закрыть</button>
        </div>
        <div className="services__modal-overlay modal-overlay modal-overlay--dark modal-close"/>
      </li>
    );
  }
}

Slide.propTypes = {
  slide: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
  isActive: PropTypes.bool.isRequired,
  clickedSlide: PropTypes.string.isRequired,
  isNext: PropTypes.bool.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  onSlideClick: PropTypes.func.isRequired,
};

export default Slide;
