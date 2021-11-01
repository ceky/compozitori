import React from 'react';
import './TableCategories.css';

function TableCategories({ opere }) {
  return (
    <div className="table-categories-container">
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
            <th className="opera-editura">Achiziționare</th>
          </tr>
        </thead>
        <tbody>
          {opere &&
            opere.map((opera, key) => (
              <tr key={key}>
                <td className="opera-compozitor">{opera.numeCompozitor}</td>
                <td className="opera-display">{opera.display}</td>
                <td>{opera.titlu}</td>
                <td>{opera.titluEN}</td>
                <td>{opera.op}</td>
                <td>{opera.anComp}</td>
                <td>{opera.instrumentatie}</td>
                <td className="opera-editura">{opera.editura}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableCategories;
