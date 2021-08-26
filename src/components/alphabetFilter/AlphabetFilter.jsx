import React, { useState, useEffect } from 'react';
import './AlphabetFilter.css';

function AlphabetFilter({ handleLetterChange }) {
  const [alphabetList, setAlphabetList] = useState([]);
  const [activeLetter, setActiveLetter] = useState('a');

  useEffect(() => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    console.log(alphabet);
    setAlphabetList(alphabet);
  }, []);

  useEffect(() => {
    handleLetterChange(activeLetter);
  }, [activeLetter]);

  const isActiveLetter = (letter) => {
    return activeLetter === letter ? 'active' : '';
  };

  const onClickLetter = (letter) => {
    setActiveLetter(letter);
  };

  return (
    <ul className="alphabet-container">
      {alphabetList.map((letter, key) => (
        <li
          key={key}
          className={isActiveLetter(letter)}
          onClick={() => onClickLetter(letter)}
        >
          {letter.toUpperCase()}
        </li>
      ))}
    </ul>
  );
}

export default AlphabetFilter;
