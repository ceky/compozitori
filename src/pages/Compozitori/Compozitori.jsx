import React, { useState, useEffect } from 'react';

import './Compozitori.css';
import { getCompozitoriJson } from '../../services/Compozitori';
import AlphabetFilter from '../../components/alphabetFilter/AlphabetFilter';

function Compozitori({ handleCompozitorSelect }) {
  const [initialCompozitoriList] = useState(getCompozitoriJson());
  const [filteredCompozitori, setCompozitori] = useState([]);
  const [activeLetter, setActiveLetter] = useState('a');

  useEffect(() => {
    if (!initialCompozitoriList.length) return;

    const filteredList = initialCompozitoriList.filter(
      (compozitor) => getFirstLetter(compozitor.NumeCompozitor) === activeLetter
    );
    setCompozitori(filteredList);
  }, [activeLetter]);

  const getFirstLetter = (compozitor) => {
    if (!compozitor) return;

    return compozitor.charAt(0).toLowerCase();
  };

  const onLetterChange = (letter) => {
    setActiveLetter(letter);
  };

  const onClickCompozitor = (compozitor) => {
    handleCompozitorSelect(compozitor);
  };

  return (
    <div className="compozitori-container">
      <p className="big-letter">{activeLetter.toUpperCase()}</p>

      <AlphabetFilter handleLetterChange={(letter) => onLetterChange(letter)} />

      <ul className="compozitori-list">
        {filteredCompozitori.map((compozitor, key) => (
          <li
            key={key}
            data-first-letter={getFirstLetter(compozitor.NumeCompozitor)}
          >
            <a href="#" onClick={() => onClickCompozitor(compozitor)}>
              {compozitor.NumeCompozitor}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Compozitori;
