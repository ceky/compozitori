import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/Logo_blackred.png';
import logo2 from '../../assets/Logo_blackwhite.png';
import classNames from 'classnames';

function Header({ selectedLanguage }) {
  const history = useHistory();
  const location = useLocation();
  const [isExtended, setIsExtended] = useState(false);

  useEffect(() => {
    setIsExtended(location.pathname !== '/');
  }, [location]);

  function handleClick() {
    history.push('/');
  }

  // Secondary menu has black menu items since the background is white
  const isSecondaryMenu = () => {
    return (
      !isExtended ||
      location.pathname === '/about-us' ||
      location.pathname === '/contact'
    );
  };

  const isSecondaryLogo = () => {
    return (
      location.pathname === '/categorii' ||
      location.pathname === '/category-detailed'
    );
  };

  return (
    <header>
      <div
        className={
          'header-container ' + (isSecondaryMenu() ? 'secondary-menu' : '')
        }
      >
        {isExtended && (
          <div className="header-extended">
            {isSecondaryLogo() ? (
              <img
                src={logo2}
                className="logo"
                alt="Logo"
                onClick={handleClick}
              />
            ) : (
              <img
                src={logo}
                className="logo"
                alt="Logo"
                onClick={handleClick}
              />
            )}

            <p className="header-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              pulvinar et turpis vitae bibendum. Class aptent taciti sociosqu
              ad.
            </p>
          </div>
        )}
        <menu>
          <ul className="header-menu-container">
            <li
              className={
                location.pathname === '/compozitori' ||
                location.pathname === '/compozitori-detailed'
                  ? 'activeRoute'
                  : ''
              }
            >
              <a href="/compozitori">COMPOZITORI</a>
            </li>
            <li
              className={
                location.pathname === '/categorii' ||
                location.pathname === '/category-detailed'
                  ? 'activeRoute'
                  : ''
              }
            >
              <a href="/categorii">CATEGORII</a>
            </li>
            <li
              className={location.pathname === '/about-us' ? 'activeRoute' : ''}
            >
              <a href="/about-us">DESPRE NOI</a>
            </li>
            <li
              className={location.pathname === '/contact' ? 'activeRoute' : ''}
            >
              <a href="/contact">CONTACT</a>
            </li>
          </ul>
          <ul className="languages-container">
            <li className={selectedLanguage === 'ro' ? 'activeRoute' : ''}>
              <a href="#">RO</a>
            </li>
            <li className={selectedLanguage === 'en' ? 'activeRoute' : ''}>
              <a href="#">EN</a>
            </li>
          </ul>
        </menu>
      </div>
    </header>
  );
}

export default Header;
