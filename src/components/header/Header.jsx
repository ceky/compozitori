import React from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';

function Header() {
  const history = useHistory();

  function handleClick() {
    history.push('/');
  }

  return (
    <header>
      <h1 className="title">
        <a href="#" onClick={handleClick}>
          Compozitori români
        </a>
      </h1>
    </header>
  );
}

export default Header;
