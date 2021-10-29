import React from 'react';
import './TableCompozitor.css';

function TableCompozitor({ opere }) {
  return (
    <div className="table-compozitori-container">
      <table>
        <thead>
          <tr>
            <th className="opera-display">Categorie</th>
            <th className="opera-title">Titlu</th>
            <th className="opera-titleEn"></th>
            <th className="opera-op">Op.</th>
            <th className="opera-anComp">An comp.</th>
            <th className="opera-instrumentatii">Instrumentație</th>
          </tr>
        </thead>
        <tbody>
          {opere.map((opera, key) => (
            <tr key={key}>
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

export default TableCompozitor;
