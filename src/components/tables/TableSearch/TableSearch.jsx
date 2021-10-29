import React from 'react';
import './TableSearch.css';

function TableSearch({ compozitori }) {
  return (
    <div className="table-search-container">
      {!!compozitori.length && (
        <table>
          <thead>
            <tr>
              <th className="opera-compozitor">Nume</th>
              <th className="opera-display">Categorie</th>
              <th className="opera-title">Titlu</th>
              <th className="opera-titleEn"></th>
              <th className="opera-op">Op.</th>
              <th className="opera-anComp">An comp.</th>
              <th className="opera-instrumentatii">Instrumentație</th>
            </tr>
          </thead>
          <tbody>
            {compozitori.map((opera, key) => (
              <tr key={key}>
                <td className="opera-compozitor">{opera.numeCompozitor}</td>
                <td>{opera.display}</td>
                <td>{opera.titlu}</td>
                <td>{opera.titluEN}</td>
                <td>{opera.op}</td>
                <td>{opera.anComp}</td>
                <td>{opera.instrumentatie}</td>
                <td>{opera.editura}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableSearch;
