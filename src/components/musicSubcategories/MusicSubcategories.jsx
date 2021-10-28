import React from 'react';
import axios from 'axios';
import './MusicSubcategories.css';

import { getOpereInstrumentUrl, getOpereStilUrl } from '../../services/urls';

function MusicSubcategories({
  mainCategory,
  subcategories,
  handleSubcategoryChange,
  cleanTable,
}) {
  const camelCaseToSentance = (text) => {
    const result = text.replace(/([A-Z])/g, ' $1');
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  };

  const onClickSubcategory = (selectedCategory) => {
    subcategories.map((subcategory) => {
      subcategory.selected = false;

      if (subcategory.name === selectedCategory) {
        subcategory.selected = true;
      }
    });

    // clear the results from the table until the we receive the response from the server
    cleanTable();

    if (selectedCategory === 'Toate') {
      axios.get(`${getOpereStilUrl}${mainCategory.name}`).then((response) => {
        const opere = [];
        for (const [key, value] of Object.entries(response.data)) {
          opere.push(JSON.parse(value));
        }

        // update table
        handleSubcategoryChange(opere);
      });
      return;
    }

    axios
      .get(`${getOpereInstrumentUrl}${selectedCategory}`)
      .then((response) => {
        const opere = [];
        for (const [key, value] of Object.entries(response.data)) {
          opere.push(JSON.parse(value));
        }

        // update table
        handleSubcategoryChange(opere);
      });
  };

  return (
    <ul className="music-subcategories-container">
      {subcategories.map((subcategory, key) => (
        <li key={key} onClick={() => onClickSubcategory(subcategory.name)}>
          <a href="#" className={`${subcategory.selected ? 'active' : ''}`}>
            {camelCaseToSentance(subcategory.name)}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default MusicSubcategories;
