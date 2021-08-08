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
      <h1 onClick={handleClick}>Header</h1>
    </header>
  );
}

export default Header;
