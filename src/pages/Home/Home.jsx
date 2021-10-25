import React, { useState } from 'react';

import './Home.css';
import '../../components/common.css';
import logo from '../../assets/Logo_blackred.png';
import TableSearch from '../../components/tables/TableSearch/TableSearch';
import { findUrl } from '../../services/urls';

import axios from 'axios';

function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [compozitoriList, setCompozitoriList] = useState([]);

  function onChangeSearch(event) {
    axios
      .get(`${findUrl}${event.target.value.toLowerCase()}`)
      .then((response) => {
        const opere = [];
        for (const [key, value] of Object.entries(response.data)) {
          opere.push(JSON.parse(value));
        }
        setCompozitoriList(opere);
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
          <p className="strong">Indexul digital al muzicii clasice româești</p>

          <p className="italic">
            Aceasta baza de date este in continua actualizare
          </p>
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
