import React, { useState, useEffect } from 'react';
import { getCategoriesInstrumenteJson } from '../../services/CategoriiInstrumente';
import { getCategoriesMuzicaJson } from '../../services/CategoriiMuzica';
import { getOperaInstrumentUrl } from '../../services/urls';

import axios from 'axios';

import './Categories.css';

function Categories({ handleInstrumentSelect, handleCategorieMuzicalaSelect }) {
  const [categoriesInstrumente, setCategoriesInstrumente] = useState([]);
  const [categoriesMuzica, setCategoriesMuzica] = useState([]);

  useEffect(() => {
    setCategoriesMuzica(getCategoriesMuzicaJson());
    setCategoriesInstrumente(getCategoriesInstrumenteJson());
  }, []);

  const onClickInstrument = (instrument) => {
    axios
      .get(`${getOperaInstrumentUrl}${instrument.toLowerCase()}`)
      .then((response) => {
        handleInstrumentSelect(instrument, response.data);
      });
  };

  const onClickCategorieMuzicala = (categorieMuzicala) => {
    axios
      .get(`${getOperaInstrumentUrl}${categorieMuzicala.toLowerCase()}`)
      .then((response) => {
        console.log(response);
      });
    // handleCategorieMuzicalaSelect(categorieMuzicala);
  };

  return (
    <div className="categories-container">
      <ul className="column instrumente-container">
        {categoriesInstrumente.map((instrument, key) => (
          <li key={key}>
            <a href="#" onClick={() => onClickInstrument(instrument)}>
              {instrument}
            </a>
          </li>
        ))}
      </ul>
      <ul className="column muzica-container">
        {categoriesMuzica.map((muzica, key) => (
          <li key={key}>
            <a href="#" onClick={() => onClickCategorieMuzicala(muzica)}>
              {muzica.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
