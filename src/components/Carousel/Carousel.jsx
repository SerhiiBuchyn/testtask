import React from 'react';
import Slider from 'react-slick';

import avater from '../../images/carousel-img/avatar.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Сarousel.css';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="carousel">
            <Slider {...settings}>
                <div className="carousel__wrapper">
                    <div className="carousel__item carousel__item__img1">
                        <div className="carousel__user-info">
                            <div className="avatar">
                                <img className="avatar__img" src={avater} alt="avatar__img" />
                            </div>
                            <h3 className="carousel__title">
                Maecenas quis lobortis nunc. Nullam sit vel odio congue vulputa a ut nisi.
                            </h3>
                        </div>
                        <div className="carousel__info__wrapper">
                            <div className="carousel__info__container">
                                <div className="carousel__img__label lable label__style label__bg__blue">
                                    <p className="label__style">People</p>
                                </div>
                                <div className="carousel__info">
                                    <div className="post__info">
                                        <p className="post__date">14 september 2016</p>
                                    </div>
                                    <div className="banner__author">
                                        <p className="post">
                                            <a href="#" className="post__author__link">
                        John Doe
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel__wrapper">
                    <div className="carousel__item carousel__item__img2">
                        <div className="carousel__user-info">
                            <div className="avatar">
                                <img className="avatar__img" src={avater} alt="avatar__img" />
                            </div>
                            <h3 className="carousel__title">
                Maecenas quis lobortis nunc. Nullam sit vel odio congue vulputa a ut nisi.
                            </h3>
                        </div>
                        <div className="carousel__info__wrapper">
                            <div className="carousel__info__container">
                                <div className="carousel__img__label lable label__style label__bg__blue">
                                    <p className="label__style">People</p>
                                </div>
                                <div className="carousel__info">
                                    <div className="post__info">
                                        <p className="post__date">14 september 2016</p>
                                    </div>
                                    <div className="banner__author">
                                        <p className="post">
                                            <a href="#" className="post__author__link">
                        John Doe
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};
export default Carousel;
