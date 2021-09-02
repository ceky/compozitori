import React, { useState } from 'react';

import './Home.css';
import '../../components/common.css';
import logo from '../../assets/logo.jpg';
import TableSearch from '../../components/tables/TableSearch/TableSearch';
import { getCompozitoriJson } from '../../services/Compozitori';

function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [compozitoriList] = useState(getCompozitoriJson());

  function onChangeSearch(event) {
    setSearchValue(event.target.value.toLowerCase());
  }

  return (
    <div>
      <main className="home-container">
        <div className="main-container">
          <img src={logo} className="logo" alt="Logo" />
          <h1>Catalog muzical</h1>
        </div>
        <p className="main-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus
          leo ex, ac tempor sapien viverra ac. Suspendisse iaculis ultrices
          ante, id scelerisque nisi tempus a. Nunc ut nisl sit amet ante cursus
          posuere. Cras aliquam lorem quis vestibulum pellentesque. Donec
          tincidunt rhoncus neque, at egestas lorem aliquam fringilla.
          Phasellus.
        </p>

        <input
          className="search-input"
          onChange={onChangeSearch}
          placeholder="Caută"
          type="search"
          value={searchValue}
        />
      </main>
      <TableSearch searchValue={searchValue} compozitori={compozitoriList} />
    </div>
  );
}

export default Home;
