import React from 'react';

import gallery__img from '../../images/gallery/Layer5.png';
import './Gallery.css';

const Gallery = () => {
    return (
        <div className="gallery__wrapper">

            <div className="gallery__container">
                <div className="gallery__img__container">
                    <img className="gallery__img"
                        src={gallery__img} alt="gallery__img"/>
                    <div className="img__label lable label__style label__bg__green">
                        <p className="label__style">Nature</p>
                    </div>
                </div>
                <div className="gallery__description">
                    <h3 className="gallery__title">
                        Donec elementum dui semper, pretium dui quis,
                        pretium nisl. Nunc quis ornare odio.
                    </h3>
                    <div className="gallery__info__container">
                        <div className="post__info">
                            <p className="post__date">
                                11 september 2016
                            </p>
                        </div>
                        <div className="post__author">
                            <p className="post">
                                <a href="#" className="post__author__link">John Doe</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gallery__container">
                <div className="gallery__img__container">
                    <img className="gallery__img"
                        src={gallery__img} alt="gallery__img"/>
                    <div className="img__label lable label__style label__bg__blue">
                        <p className="label__style">People</p>
                    </div>
                </div>
                <div className="gallery__description">
                    <h3 className="gallery__title">
                        Donec elementum dui semper, pretium dui quis,
                        pretium nisl. Nunc quis ornare odio.
                    </h3>
                    <div className="gallery__info__container">
                        <div className="post__info">
                            <p className="post__date">
                                11 september 2016
                            </p>
                        </div>
                        <div className="post__author">
                            <p className="post">
                                <a href="#" className="post__author__link">John Doe</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gallery__container">
                <div className="gallery__img__container">
                    <img className="gallery__img"
                        src={gallery__img} alt="gallery__img"/>
                    <div className="img__label lable label__style label__bg__black">
                        <p className="label__style">Tech</p>
                    </div>
                </div>
                <div className="gallery__description">
                    <h3 className="gallery__title">
                        Donec elementum dui semper, pretium dui quis,
                        pretium nisl. Nunc quis ornare odio.
                    </h3>
                    <div className="gallery__info__container">
                        <div className="post__info">
                            <p className="post__date">
                                11 september 2016
                            </p>
                        </div>
                        <div className="post__author">
                            <p className="post">
                                <a href="#" className="post__author__link">John Doe</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gallery__container">
                <div className="gallery__img__container">
                    <img className="gallery__img"
                        src={gallery__img} alt="gallery__img"/>
                    <div className="img__label lable label__style label__bg__red">
                        <p className="label__style">Trips</p>
                    </div>
                </div>
                <div className="gallery__description">
                    <h3 className="gallery__title">
                        Donec elementum dui semper, pretium dui quis,
                        pretium nisl. Nunc quis ornare odio.
                    </h3>
                    <div className="gallery__info__container">
                        <div className="post__info">
                            <p className="post__date">
                                11 september 2016
                            </p>
                        </div>
                        <div className="post__author">
                            <p className="post">
                                <a href="#" className="post__author__link">John Doe</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gallery__container">
                <div className="gallery__img__container">
                    <img className="gallery__img"
                        src={gallery__img} alt="gallery__img"/>
                    <div className="img__label lable label__style label__bg__red">
                        <p className="label__style">Trips</p>
                    </div>
                </div>
                <div className="gallery__description">
                    <h3 className="gallery__title">
                        Donec elementum dui semper, pretium dui quis,
                        pretium nisl. Nunc quis ornare odio.
                    </h3>
                    <div className="gallery__info__container">
                        <div className="post__info">
                            <p className="post__date">
                                11 september 2016
                            </p>
                        </div>
                        <div className="post__author">
                            <p className="post">
                                <a href="#" className="post__author__link">John Doe</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gallery__container">
                <div className="gallery__img__container">
                    <img className="gallery__img"
                        src={gallery__img} alt="gallery__img"/>
                    <div className="img__label lable label__style label__bg__violet">
                        <p className="label__style">Fashion</p>
                    </div>
                </div>
                <div className="gallery__description">
                    <h3 className="gallery__title">
                        Donec elementum dui semper, pretium dui quis,
                        pretium nisl. Nunc quis ornare odio.
                    </h3>
                    <div className="gallery__info__container">
                        <div className="post__info">
                            <p className="post__date">
                                11 september 2016
                            </p>
                        </div>
                        <div className="post__author">
                            <p className="post">
                                <a href="#" className="post__author__link">John Doe</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;