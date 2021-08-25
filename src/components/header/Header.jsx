import React from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.jpg';

function Header({ isExtended }) {
  const history = useHistory();

  function handleClick() {
    history.push('/');
  }

  return (
    <header>
      <img src={logo} className="logo" alt="Logo" />
      <div className="header-container">
        <div className="header-extended">
          <h2 className="header-title">
            <a href="#" onClick={handleClick}>
              Catalog muzical
            </a>
          </h2>
          <p className="header-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            pulvinar et turpis vitae bibendum. Class aptent taciti sociosqu ad.
          </p>
        </div>
        <menu>
          <ul className="header-menu-container">
            <li>
              <a href="#">COMPOZITORI</a>
            </li>
            <li>
              <a href="#">CATEGORII</a>
            </li>
            <li>
              <a href="#">DESPRE NOI</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
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
