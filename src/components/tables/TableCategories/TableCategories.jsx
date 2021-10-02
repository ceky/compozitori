import React from 'react';
import './TableCategories.css';

function TableCategories({ opere }) {
  return (
    <div className="table-categories-container">
      <table>
        <thead>
          <tr>
            <th className="opera-compozitor">Compozitor</th>
            <th className="opera-title">Titlu</th>
            <th className="opera-an">Anul Compozitiei</th>
            <th className="opera-stil">Stil</th>
            <th className="opera-detalii">Detalii</th>
            <th className="opera-detalii">Versuri</th>
          </tr>
        </thead>
        <tbody>
          {opere &&
            opere.map((opera, key) => (
              <tr key={key}>
                <td className="opera-compozitor">{opera.numeCompozitor}</td>
                <td className="opera-title">{opera.titlu}</td>
                <td>{opera.anComp}</td>
                <td>{opera.stil}</td>
                <td>{opera.details}</td>
                <td>{opera.versuri}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableCategories;
