import React, { useState, useEffect } from 'react';
import { getCategoriesInstrumenteJson } from '../../services/CategoriiInstrumente';
import { getCategoriesMuzicaJson } from '../../services/CategoriiMuzica';
import { getOpereInstrumentUrl, getOpereStilUrl } from '../../services/urls';

import axios from 'axios';

import './Categories.css';

function Categories({ handleInstrumentSelect, handleCategorieMuzicalaSelect }) {
  const [categoriesInstrumente, setCategoriesInstrumente] = useState([]);
  const [categoriesMuzica, setCategoriesMuzica] = useState([]);

  useEffect(() => {
    setCategoriesInstrumente(getCategoriesInstrumenteJson());
    setCategoriesMuzica(getCategoriesMuzicaJson());
  }, []);

  const onClickInstrument = (instrument) => {
    if (instrument === 'alteInstrumente') {
      instrument = 'altele';
    }

    axios.get(`${getOpereInstrumentUrl}${instrument}`).then((response) => {
      const opere = [];
      for (const [key, value] of Object.entries(response.data)) {
        opere.push(JSON.parse(value));
      }
      handleInstrumentSelect(instrument, opere);
    });
  };

  const onClickCategorieMuzicala = (categorieMuzicala, subcategorii = []) => {
    if (categorieMuzicala === 'Operă / Teatru / Operete') {
      retrieveOperaTeatruOperete(categorieMuzicala);
      return;
    }

    axios.get(`${getOpereStilUrl}${categorieMuzicala}`).then((response) => {
      const opere = [];
      for (const [key, value] of Object.entries(response.data)) {
        opere.push(JSON.parse(value));
      }

      if (subcategorii.length) {
        subcategorii.unshift('Toate');

        subcategorii = subcategorii.map((subcategory) => {
          return {
            selected: subcategory === 'Toate' ? true : false,
            name: subcategory,
          };
        });
      }

      handleCategorieMuzicalaSelect(categorieMuzicala, opere, subcategorii);
    });
  };

  const retrieveOperaTeatruOperete = (categorieMuzicala) => {
    const requestOne = axios.get(`${getOpereStilUrl}Muzică de teatru`);
    const requestTwo = axios.get(`${getOpereStilUrl}Muzică de scenă`);

    axios.all([requestOne, requestTwo]).then(
      axios.spread((...responses) => {
        const opere = [];
        const responseOne = responses[0].data;
        const responseTwo = responses[1].data;

        for (const [key, value] of Object.entries(responseOne)) {
          opere.push(JSON.parse(value));
        }

        for (const [key, value] of Object.entries(responseTwo)) {
          opere.push(JSON.parse(value));
        }

        handleCategorieMuzicalaSelect(categorieMuzicala, opere, []);
      })
    );
  };

  const capitalize = (text) => {
    return text[0].toUpperCase() + text.substring(1);
  };

  /**
   * If it has `stil` call /opera_stil
   * Otherwise call /opera_instrument
   */
  const renderCategoriesWithoutParent = (muzica) => {
    return muzica.items.map((category, key) => {
      return (
        <li key={key}>
          <a href="#" onClick={() => onClickCategorieMuzicala(category)}>
            {capitalize(category)}
          </a>
        </li>
      );
    });
  };

  return (
    <div className="categories-container">
      <ul className="column instrumente-container">
        {categoriesInstrumente.map((instrument, key) => (
          <li key={key}>
            <a href="#" onClick={() => onClickInstrument(instrument.value)}>
              {instrument.display}
            </a>
          </li>
        ))}
      </ul>
      <ul className="column muzica-container">
        {categoriesMuzica.map((muzica, key) =>
          muzica.stil.length ? (
            <li key={key}>
              <a
                href="#"
                onClick={() =>
                  onClickCategorieMuzicala(muzica.stil, muzica.items)
                }
              >
                {muzica.stil}
              </a>
            </li>
          ) : (
            renderCategoriesWithoutParent(muzica)
          )
        )}
      </ul>
    </div>
  );
}

export default Categories;
