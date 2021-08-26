import React, { useEffect, useState } from 'react';
import TableCompozitor from '../../components/tables/TableCompozitor/TableCompozitor';

import './CompozitoriDetailed.css';

function CompozitoriDetailed({ opereCompozitor }) {
  const images = import.meta.globEager('/src/assets/compozitori/*.jpg');

  const [compozitor] = useState({
    NumeCompozitor: opereCompozitor[0].NumeCompozitor,
    Description: opereCompozitor[0].Description,
    Photo: opereCompozitor[0].Photo,
  });

  return (
    <div className="compozitor-details">
      <div className="compozitor-details-container">
        <h1 className="name">{compozitor.NumeCompozitor}</h1>
        <p className="description">{compozitor.Description}</p>
        <img
          className="avatar"
          src={images[`/src/assets/compozitori/${compozitor.Photo}`].default}
        />
      </div>
      <div className="table-container">
        <TableCompozitor opereCompozitor={opereCompozitor} />
      </div>
    </div>
  );
}

export default CompozitoriDetailed;
