import React from 'react';
import './TableCategories.css';

function TableCategories() {
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
          <tr>
            <td className="opera-compozitor">Test Compozitor 1</td>
            <td className="opera-title">Nume opera 1</td>
            <td>1920</td>
            <td>Muzica vocala</td>
            <td>
              Praesent maximus justo ac convallis pretium. Aliquam dignissim
              eros ante, vel accumsan
            </td>
          </tr>
          <tr>
            <td className="opera-compozitor">Test Compozitor 2</td>
            <td className="opera-title">Nume opera 2</td>
            <td>1922</td>
            <td>Muzica vocala</td>
            <td>
              Praesent maximus justo ac convallis pretium. Aliquam dignissim
              eros ante, vel accumsan
            </td>
          </tr>
          <tr>
            <td className="opera-compozitor">Test Compozitor 3</td>
            <td className="opera-title">Nume opera 3</td>
            <td>1924</td>
            <td>Muzica simfonica</td>
            <td>
              Praesent maximus justo ac convallis pretium. Aliquam dignissim
              eros ante, vel accumsan
            </td>
          </tr>
          <tr>
            <td className="opera-compozitor">Test Compozitor 4</td>
            <td className="opera-title">Nume opera 4</td>
            <td>1925</td>
            <td>Muzica simfonica</td>
            <td>
              Praesent maximus justo ac convallis pretium. Aliquam dignissim
              eros ante, vel accumsan
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableCategories;
