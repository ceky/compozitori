import React, { useState } from 'react';
import TableCompozitor from '../../components/tables/TableCompozitor/TableCompozitor';

import './CompozitoriDetailed.css';

function CompozitoriDetailed({ opereCompozitor }) {
  const images = import.meta.globEager('/src/assets/compozitori/*.jpg');

  const opere = [];
  for (const [key, value] of Object.entries(opereCompozitor)) {
    opere.push(JSON.parse(value));
  }

  const [compozitor] = useState({
    numeCompozitor: opere[0].numeCompozitor,
    bio: opere[0].bio,
    photo: '/src/assets/compozitori/avatar.jpg',
  });

  return (
    <div className="compozitor-details">
      <div className="compozitor-details-container">
        <h1 className="name">{compozitor.numeCompozitor}</h1>
        <img className="avatar" src={images[compozitor.photo].default} />
        <p className="description">{compozitor.bio}</p>
      </div>
      <div className="table-container">
        <TableCompozitor opere={opere} />
      </div>
    </div>
  );
}

export default CompozitoriDetailed;
