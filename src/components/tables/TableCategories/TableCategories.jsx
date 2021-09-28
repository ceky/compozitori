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
          </tr>
        </thead>
        <tbody>
          {opere &&
            opere.map((opera) => (
              <tr>
                <td className="opera-compozitor">{opera.numeCompozitor}</td>
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

export default TableCategories;
