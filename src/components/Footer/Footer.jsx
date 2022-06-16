import React from 'react';

import './Footer.css';

const Footer = () => (
    <div className="footer__wrapper">
        <div className="footer__container">
            <div className="footer__info__description">
                <h4 className="footer__title">Newsletter</h4>
                <p className="footer__description">
          Donec elementum dui semper, pretium dui quis, pretium nisl.
                </p>
                <div className="footer__btn__container">
                    <div className="footer__btn__slider">
                        <button className="footer__btn">Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Footer;
