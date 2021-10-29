import React, { useState, useEffect } from 'react';

import './Home.css';
import '../../components/common.css';
import logo from '../../assets/logo_landing.png';
import TableSearch from '../../components/tables/TableSearch/TableSearch';
import { findUrl } from '../../services/urls';

import axios from 'axios';

function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [compozitoriList, setCompozitoriList] = useState([]);
  const [delayTimer, setDelayTimer] = useState(null);

  function onChangeSearch(event) {
    setSearchValue(event.target.value.toLowerCase());

    clearTimeout(delayTimer);

    setDelayTimer(
      setTimeout(function () {
        axios
          .get(`${findUrl}${event.target.value.toLowerCase()}`)
          .then((response) => {
            const opere = [];
            for (const [key, value] of Object.entries(response.data)) {
              opere.push(JSON.parse(value));
            }
            setCompozitoriList(opere);
          });
      }, 400)
    );
  }

  return (
    <div>
      <main className="home-container">
        <div className="main-container">
          <img src={logo} className="logo" alt="Logo" />
        </div>
        <p className="subtitle">Indexul digital al muzicii clasice românești</p>

        <input
          className="search-input"
          onChange={onChangeSearch}
          placeholder="Caută pian, cvartet, soprană, nume compozitor"
          type="search"
          value={searchValue}
        />
      </main>
      <TableSearch compozitori={compozitoriList} />
    </div>
  );
}

export default Home;
