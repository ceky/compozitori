import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/Logo_blackred.png';
import logo2 from '../../assets/Logo_blackwhite.png';

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

  return (
    <header>
      <div
        className={
          'header-container ' + (isSecondaryMenu() ? 'secondary-menu' : '')
        }
      >
        {isExtended && (
          <div className="header-extended">
            {!isSecondaryMenu() ? (
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

            <div className="header-description">
              <p className="bold-desc">Acum sunt indexate 12570de titluri.</p>
              <p className="italic-desc">
                Aceasta baza de date este in continua actualizare.
              </p>
            </div>
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
              <a href="/about-us">DESPRE PROIECT</a>
            </li>
            <li
              className={location.pathname === '/contact' ? 'activeRoute' : ''}
            >
              <a href="/contact">CONTACT</a>
            </li>
          </ul>
        </menu>
      </div>
    </header>
  );
}

export default Header;
