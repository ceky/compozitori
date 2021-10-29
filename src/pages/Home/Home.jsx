import React, { useState } from 'react';

import './Home.css';
import '../../components/common.css';

import TableSearch from '../../components/tables/TableSearch/TableSearch';
import { findUrl } from '../../services/urls';

import axios from 'axios';

function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [compozitoriList, setCompozitoriList] = useState([]);
  const [delayTimer, setDelayTimer] = useState(null);

  function onChangeSearch(event) {
    setSearchValue(event.target.value.toLowerCase());

    if (!event.target.value.length) {
      setCompozitoriList([]);
      return;
    }

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
      }, 300)
    );
  }

  return (
    <div>
      <main className="home-container">
        <p>Această bază de date este in continuă actualizare.</p>
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
