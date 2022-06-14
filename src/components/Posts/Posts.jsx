import React from 'react';

import post__img from '../../images/Layer3.png';
import './Posts.css';

const Posts = () => {
    return (
        <div className="posts__wrapper">
            <div className="post__wrap">
                <div className="post__container">
                    <div className="img__container">
                        <img className="post__img"
                            src={post__img} alt="post__img"/>
                        <div className="img__label lable label__style label__bg__red">
                            <p className="label__style">Trips</p>
                        </div>
                    </div>
                    <h1 className="post__title">
                        Donec elementum dui semper, pretium dui quis,
                        pretium nisl. Nunc quis ornare odio.
                    </h1>
                    <div className="post__info__container">
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
                <div className="post__container">
                    <div className="img__container">
                        <img className="post__img"
                            src={post__img} alt="post__img"/>
                        <div className="img__label label label__style label__bg__black">
                            <p className="label__style ">Tech</p>
                        </div>
                    </div>
                    <h1 className="post__title">
                        Donec elementum dui semper, pretium dui quis,
                        pretium nisl. Nunc quis ornare odio.
                    </h1>
                    <div className="post__info__container">
                        <div className="post__info">
                            <p className="post__date">
                                16 september 2016
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

export default Posts;