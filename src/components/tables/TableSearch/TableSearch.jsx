import React from 'react';
import './TableSearch.css';

function TableSearch({ compozitori }) {
  return (
    <div className="table-search-container">
      {!!compozitori.length && (
        <table>
          <thead>
            <tr>
              <th className="opera-compozitor">Compozitor</th>
              <th className="opera-title">Titlu</th>
              <th className="opera-title">An</th>
              <th className="opera-stil">Stil</th>
              <th className="opera-detalii">Detalii</th>
            </tr>
          </thead>
          <tbody>
            {compozitori.map((opera, key) => (
              <tr key={key}>
                <td className="opera-compozitor">{opera.numeCompozitor}</td>
                <td>{opera.titlu}</td>
                <td>{opera.anComp}</td>
                <td>{opera.stil}</td>
                <td>{opera.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableSearch;
