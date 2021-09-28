import React from 'react';
import './TableCompozitor.css';

function TableCompozitor({ opere }) {
  return (
    <div className="table-compozitori-container">
      <table>
        <thead>
          <tr>
            <th className="opera-title">Titlu</th>
            <th className="opera-an">Anul Compozitiei</th>
            <th className="opera-stil">Stil</th>
            <th className="opera-detalii">Detalii</th>
          </tr>
        </thead>
        <tbody>
          {opere.map((opera, key) => (
            <tr key={key}>
              <td className="opera-title">{opera.titlu}</td>
              <td>{opera.anComp}</td>
              <td>{opera.stil}</td>
              <td>{opera.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableCompozitor;
