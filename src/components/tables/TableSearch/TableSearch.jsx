import React, { useEffect, useState } from 'react';
import './TableSearch.css';

function TableSearch({ searchValue, compozitori }) {
  const [filteredCompozitori, setFilteredCompozitori] = useState([]);

  useEffect(() => {
    if (!searchValue.length) {
      setFilteredCompozitori([]);
      return;
    }

    const filteredList = compozitori.filter((compozitie) => {
      return (
        compozitie.NumeCompozitor.toLowerCase().includes(searchValue) ||
        compozitie.Titlu.toLowerCase().includes(searchValue) ||
        compozitie.Stil.toLowerCase().includes(searchValue) ||
        compozitie.Detalii.toLowerCase().includes(searchValue)
      );
    });

    console.log(filteredList);

    setFilteredCompozitori(filteredList);
  }, [compozitori, searchValue]);

  return (
    <div className="table-search-container">
      {!!filteredCompozitori.length && (
        <table>
          <thead>
            <tr>
              <th className="opera-compozitor">Compozitor</th>
              <th className="opera-title">Titlu</th>
              <th className="opera-stil">Stil</th>
              <th className="opera-detalii">Detalii</th>
            </tr>
          </thead>
          <tbody>
            {filteredCompozitori.map((opera, key) => (
              <tr key={key}>
                <td className="opera-compozitor">{opera.NumeCompozitor}</td>
                <td>{opera.Titlu}</td>
                <td>{opera.Stil}</td>
                <td>{opera.Detalii}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableSearch;
