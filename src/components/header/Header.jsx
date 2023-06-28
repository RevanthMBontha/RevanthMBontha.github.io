import React from 'react';
import { useState } from 'react';
import './header.css';

const Header = () => {
  // Change Background Header
  window.addEventListener('scroll', function () {
    const header = this.document.querySelector('.header');
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
  });

  // isMenuVisible Menu
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  const doThis = (inString) => {
    setActiveNav(inString);
    setIsMenuVisible(false);
  };
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Revanth Bontha
        </a>

        <div className={isMenuVisible ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className="nav__list ">
            <li className="nav__item">
              <a
                href="#home"
                className={
                  activeNav === '#home' ? 'nav__link active-link' : 'nav__link'
                }
                onClick={() => doThis('#home')}
              >
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                className={
                  activeNav === '#about' ? 'nav__link active-link' : 'nav__link'
                }
                onClick={() => doThis('#about')}
              >
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                className={
                  activeNav === '#skills'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
                onClick={() => doThis('#skills')}
              >
                <i className="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#qualifications"
                className={
                  activeNav === '#qualifications'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
                onClick={() => doThis('#qualifications')}
              >
                <i className="uil uil-file-alt nav__icon"></i>Qualifications
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                className={
                  activeNav === '#portfolio'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
                onClick={() => doThis('#portfolio')}
              >
                <i className="uil uil-scenery nav__icon"></i>Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                className={
                  activeNav === '#contact'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
                onClick={() => doThis('#contact')}
              >
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => setIsMenuVisible(!isMenuVisible)}
          ></i>
        </div>

        <div
          className="nav__toggle"
          onClick={() => setIsMenuVisible(!isMenuVisible)}
        >
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
