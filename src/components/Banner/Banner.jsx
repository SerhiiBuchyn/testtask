import React from 'react';

import banner__img from '../../images/Layer11.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner__wrap">
            <div className="benner__container">
                <div className="banner__img__container">
                    <img className="banner__img" src={banner__img} alt="banner__img" />
                    <div className="img__label lable label__style label__bg__red">
                        <p className="label__style">Trips</p>
                    </div>
                    <div className="banner__info__container">
                        <div className="post__info">
                            <p className="post__date">11 september 2016</p>
                        </div>
                        <div className="banner__author">
                            <p className="post">
                                <a href="#" className="post__author__link">
                  John Doe
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="banner__description">
                        <h2 className="banner__title">Proin congue elit fringilla</h2>
                        <p className="banner__info__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, tempora Lorem
              ipsum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Banner;
