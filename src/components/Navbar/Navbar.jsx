import React from 'react';

import './Navbar.css';
import search__icon from '../../images/Layer2.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="menu_wrapper">
                <ul className="menu">
                    <li>
                        <div className="navbar__search">
                            <img className="search__icon" src={search__icon} alt="search__icon" />
                        </div>
                    </li>
                    <li className="navbar__link color text__style">
                        <a href="#">About</a>
                    </li>
                    <li className="navbar__link color text__style">
                        <a href="#">Cooperation</a>
                    </li>
                    <li className="navbar__link color text__style">
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <ul className="menu">
                    <li className="navbar__link text__style">
                        <a href="#">Nature</a>
                    </li>
                    <li className="navbar__link text__style">
                        <a href="#">People</a>
                    </li>
                    <li className="navbar__link text__style">
                        <a href="#">Trips</a>
                    </li>
                    <li className="navbar__link text__style">
                        <a href="#">Animals</a>
                    </li>
                    <li className="navbar__link text__style">
                        <a href="#">Fashion</a>
                    </li>
                    <li className="navbar__link text__style">
                        <a href="#">Tech</a>
                    </li>
                    <li className="dropdown_menu">
                        <button className="dropdown__btn">
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </button>
                    </li>
                </ul>
            </div>

            <div className="navbar__btn__mobile">
                <div className="navbar__search__mobile">
                    <img className="search__icon" src={search__icon} alt="search__icon" />
                </div>
                <button className="mobile__btn">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
