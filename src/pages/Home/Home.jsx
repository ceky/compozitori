import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './Home.css';
import '../../components/common.css';
import logo from '../../assets/logo.jpg';

function Home({ onOpenCategory }) {
  const history = useHistory();

  function handleClick(category) {
    onOpenCategory(category);
    history.push('/music-style');
  }

  return (
    <main className="home-container">
      <div className="main-container">
        <img src={logo} className="logo" alt="Logo" />
        <h1>Catalog muzical</h1>
      </div>
      <p className="main-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus leo
        ex, ac tempor sapien viverra ac. Suspendisse iaculis ultrices ante, id
        scelerisque nisi tempus a. Nunc ut nisl sit amet ante cursus posuere.
        Cras aliquam lorem quis vestibulum pellentesque. Donec tincidunt rhoncus
        neque, at egestas lorem aliquam fringilla. Phasellus.
      </p>
      <input className="search-input" placeholder="Caută" type="search" />
    </main>
  );
}

export default Home;
