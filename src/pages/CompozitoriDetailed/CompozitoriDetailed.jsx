import React, { useState } from 'react';
import TableCompozitor from '../../components/tables/TableCompozitor/TableCompozitor';

import './CompozitoriDetailed.css';

function CompozitoriDetailed({ opereCompozitor }) {
  const opere = [];
  for (const [key, value] of Object.entries(opereCompozitor)) {
    opere.push(JSON.parse(value));
  }

  const [compozitor] = useState({
    numeCompozitor: opere[0].numeCompozitor,
    bioRo: opere[0].bioRo,
    photo: '/src/assets/compozitori/avatar.jpg',
  });

  return (
    <div className="compozitor-details">
      <div className="compozitor-details-container">
        <h1 className="name">{compozitor.numeCompozitor}</h1>
      </div>
      <div className="table-container">
        <TableCompozitor opere={opere} />
      </div>
    </div>
  );
}

export default CompozitoriDetailed;
