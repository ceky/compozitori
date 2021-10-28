import React, { useState, useEffect } from 'react';
import { getCategoriesInstrumenteJson } from '../../services/CategoriiInstrumente';
import {
  getOpereInstrumentUrl,
  getOpereStilUrl,
  getStiluriMuzicaleUrl,
} from '../../services/urls';

import axios from 'axios';

import './Categories.css';

function Categories({ handleInstrumentSelect, handleCategorieMuzicalaSelect }) {
  const [categoriesInstrumente, setCategoriesInstrumente] = useState([]);
  const [categoriesMuzica, setCategoriesMuzica] = useState([]);

  useEffect(() => {
    axios.get(`${getStiluriMuzicaleUrl}`).then((response) => {
      setCategoriesMuzica(response.data);
    });

    setCategoriesInstrumente(getCategoriesInstrumenteJson());
  }, []);

  const onClickInstrument = (instrument) => {
    axios.get(`${getOpereInstrumentUrl}${instrument}`).then((response) => {
      const opere = [];
      for (const [key, value] of Object.entries(response.data)) {
        opere.push(JSON.parse(value));
      }
      handleInstrumentSelect(instrument, opere);
    });
  };

  const onClickCategorieMuzicala = (categorieMuzicala) => {
    axios.get(`${getOpereStilUrl}${categorieMuzicala}`).then((response) => {
      const opere = [];
      for (const [key, value] of Object.entries(response.data)) {
        opere.push(JSON.parse(value));
      }
      handleCategorieMuzicalaSelect(categorieMuzicala, opere);
    });
  };

  const camelCaseToSentance = (text) => {
    const result = text.replace(/([A-Z])/g, ' $1');
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  };

  return (
    <div className="categories-container">
      <ul className="column instrumente-container">
        {categoriesInstrumente.map((instrument, key) => (
          <li key={key}>
            <a href="#" onClick={() => onClickInstrument(instrument)}>
              {camelCaseToSentance(instrument)}
            </a>
          </li>
        ))}
      </ul>
      <ul className="column muzica-container">
        {categoriesMuzica.map((muzica, key) => (
          <li key={key}>
            <a href="#" onClick={() => onClickCategorieMuzicala(muzica)}>
              {muzica}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
