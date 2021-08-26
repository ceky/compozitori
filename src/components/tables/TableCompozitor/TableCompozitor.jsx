import React from 'react';
import './TableCompozitor.css';

function TableCompozitor({ opereCompozitor }) {
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
          {opereCompozitor.map((opera) => (
            <tr key={opera.id}>
              <td className="opera-title">{opera.Titlu}</td>
              <td>{opera.AnulComp}</td>
              <td>{opera.Stil}</td>
              <td>{opera.Detalii}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableCompozitor;
