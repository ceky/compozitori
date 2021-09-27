import React, { useState, useEffect } from 'react';

import './Compozitori.css';
import AlphabetFilter from '../../components/alphabetFilter/AlphabetFilter';
import { getCompozitori } from '../../services/urls';

import axios from 'axios';

function Compozitori({ handleCompozitorSelect }) {
  const [initialCompozitoriList, setInitialCompozitoriList] = useState([]);
  const [filteredCompozitori, setFilteredCompozitori] = useState([]);
  const [activeLetter, setActiveLetter] = useState('a');

  useEffect(() => {
    axios.get(getCompozitori).then((response) => {
      setInitialCompozitoriList(response.data);
    });
  }, []);

  useEffect(() => {
    if (!initialCompozitoriList.length) return;

    const filteredList = initialCompozitoriList.filter(
      (compozitor) => getFirstLetter(compozitor) === activeLetter
    );
    setFilteredCompozitori(filteredList);

    console.log(filteredList);
  }, [activeLetter, initialCompozitoriList]);

  const getFirstLetter = (compozitor) => {
    if (!compozitor) return;

    return compozitor.charAt(0).toLowerCase();
  };

  const onLetterChange = (letter) => {
    setActiveLetter(letter);
  };

  const onClickCompozitor = (compozitor) => {
    const opereCompozitor = initialCompozitoriList.filter(
      (item) => item.NumeCompozitor === compozitor.NumeCompozitor
    );
    handleCompozitorSelect(opereCompozitor);
  };

  return (
    <div className="compozitori-container">
      <p className="big-letter">{activeLetter.toUpperCase()}</p>

      <AlphabetFilter handleLetterChange={(letter) => onLetterChange(letter)} />

      <ul className="compozitori-list">
        {filteredCompozitori.map((compozitor, key) => (
          <li key={key} data-first-letter={getFirstLetter(compozitor)}>
            <a href="#" onClick={() => onClickCompozitor(compozitor)}>
              {compozitor}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Compozitori;
