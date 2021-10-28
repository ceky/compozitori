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
          placeholder="Caută"
          type="search"
          value={searchValue}
        />

        <p className="main-description">
          Proiectul Catalog Muzical isi propune digitalizarea si agregarea
          informatiilor despre lucrarile compozitorilor romani intr-un singur
          loc, care sa fie accesibil tuturor, la un click distanta. O platforma
          online care sa inglobeze detaliile esentiale despre o lucrare muzicala
          ( anul compozitie, stilul muzical, intrumentele folosite, unde este
          disponibila etc.) astfel incat sa fie usor de gasit de catre cei
          interesati. Catalogmuzical.ro vine in intampinarea nevoilor tuturor
          profesionistilor din muzica clasica de informatii rapide, concise si
          utile. Platforma va functiona ca un punct de referinta pentru
          identificarea si localizarea lucrarilor muzicale apartinand
          compozitorilor romani. Cu toate ca exista informatii despre fiecare
          compozitor roman in parte, in diverse carti de istorie sau carti
          biografice, nu exista un loc care sa centralizeze o lista a lucrarilor
          compuse de toti compozitorii de muzica clasica din Romania. Sunt
          cateva carti vechi si dictionare care catalogheaza lucrarile acestora,
          insa informatiile sunt incomplete, neactualizate si disparate.
        </p>
      </main>
      <TableSearch compozitori={compozitoriList} />
    </div>
  );
}

export default Home;
