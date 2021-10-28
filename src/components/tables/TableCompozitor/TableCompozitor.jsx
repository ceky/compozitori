import React from 'react';
import './TableCompozitor.css';

function TableCompozitor({ opere }) {
  return (
    <div className="table-compozitori-container">
      <table>
        <thead>
          <tr>
            <th className="opera-title"></th>
            <th className="opera-an"></th>
            <th className="opera-stil"></th>
            <th className="opera-detalii"></th>
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
