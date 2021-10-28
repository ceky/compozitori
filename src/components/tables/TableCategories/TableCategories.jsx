import React from 'react';
import './TableCategories.css';

function TableCategories({ opere }) {
  return (
    <div className="table-categories-container">
      <table>
        <thead>
          <tr>
            <th className="opera-compozitor"></th>
            <th className="opera-display"></th>
            <th className="opera-title"></th>
            <th className="opera-titleEn"></th>
            <th className="opera-op"></th>
            <th className="opera-anComp"></th>
            <th className="opera-instrumentatii"></th>
            <th className="opera-editura"></th>
          </tr>
        </thead>
        <tbody>
          {opere &&
            opere.map((opera, key) => (
              <tr key={key}>
                <td className="opera-compozitor">{opera.numeCompozitor}</td>
                <td>{opera.display}</td>
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
