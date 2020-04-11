import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {clearAnim, followingSlideClickAnim, onNextSlideClickAnim, setAnimIn, setAnimOut} from "../../animation";

class Slide extends PureComponent {
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
    } else if (prevProps.isFollowing) {
      followingSlideClickAnim(this.slide.current);
    } else if (prevProps.isNext) {
      onNextSlideClickAnim(this.slide.current);
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
    const {isNext, onSlideClick, slide} = this.props;

    onSlideClick(slide.id);
  }

  render() {
    const {isActive, isFollowing, isNext, isSlideChange, slide} = this.props;

    return (
      <li
        className={`${isActive && `services__item--active`} ${isFollowing && `services__item--next`} ${isNext && `services__item--next`} services__item swiper-slide`}
        onClick={this.onClick}
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
  isSlideChange: PropTypes.bool.isRequired,
  isNext: PropTypes.bool.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  onSlideClick: PropTypes.func.isRequired,
};

export default Slide;
