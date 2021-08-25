import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.jpg';

function Header() {
  const history = useHistory();
  const location = useLocation();
  const [isExtended, setIsExtended] = useState(false);

  useEffect(() => {
    setIsExtended(location.pathname !== '/');
  }, [location]);

  function handleClick() {
    history.push('/');
  }

  return (
    <header>
      <div className={'header-container ' + (isExtended ? 'isExtended' : '')}>
        {isExtended && (
          <div className="header-extended">
            <img src={logo} className="logo" alt="Logo" />
            <h2 className="header-title">
              <a href="#" onClick={handleClick}>
                Catalog muzical
              </a>
            </h2>
            <p className="header-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              pulvinar et turpis vitae bibendum. Class aptent taciti sociosqu
              ad.
            </p>
          </div>
        )}
        <menu>
          <ul className="header-menu-container">
            <li>
              <a href="/compozitori">COMPOZITORI</a>
            </li>
            <li>
              <a href="/categories">CATEGORII</a>
            </li>
            <li>
              <a href="/about-us">DESPRE NOI</a>
            </li>
            <li>
              <a href="/contact">CONTACT</a>
            </li>
          </ul>
          <ul className="languages-container">
            <li>
              <a href="#">RO</a>
            </li>
            <li>
              <a href="#">EN</a>
            </li>
          </ul>
        </menu>
      </div>
    </header>
  );
}

export default Header;
