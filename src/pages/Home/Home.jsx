import React, { useState } from 'react';

import './Home.css';
import '../../components/common.css';
import logo from '../../assets/Logo_blackred.png';
import TableSearch from '../../components/tables/TableSearch/TableSearch';
import { getCompozitoriJson } from '../../services/Compozitori';
import { findUrl } from '../../services/urls';

import axios from 'axios';

function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [compozitoriList, setCompozitoriList] = useState([]);

  function onChangeSearch(event) {
    axios
      .get(`${findUrl}${event.target.value.toLowerCase()}`)
      .then((response) => {
        setCompozitoriList(response.data);
      });
    setSearchValue(event.target.value.toLowerCase());
  }

  return (
    <div>
      <main className="home-container">
        <div className="main-container">
          <img src={logo} className="logo" alt="Logo" />
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
      <TableSearch compozitori={compozitoriList} />
    </div>
  );
}

export default Home;
