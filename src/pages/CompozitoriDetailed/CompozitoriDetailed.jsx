import React from 'react';

import './CompozitoriDetailed.css';

// {
//   id: 1,
//   Description:
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis neque suscipit, dapibus nibh at, consectetur nulla. Sed tincidunt lectus ac semper gravida. Fusce vulputate risus ac sapien tincidunt, at commodo orci elementum. Nunc pellentesque tortor sit amet urna vehicula luctus.',
//   Photo: 'avatar.jpg',
//   Description:
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis neque suscipit, dapibus nibh at, consectetur nulla. Sed tincidunt lectus ac semper gravida. Fusce vulputate risus ac sapien tincidunt, at commodo orci elementum. Nunc pellentesque tortor sit amet urna vehicula luctus.',
//   Photo: 'avatar.jpg',
//   NumeCompozitor: 'ALBU Sandu',
//   n: '22 August 1897',
//   Stil: 'Muzică de cameră',
//   Titlu: 'Siciliana pentru violoncel și pian',
//   AnulComp: 1958,
//   Detalii: '',
// },

function CompozitoriDetailed({ compozitor }) {
  const images = import.meta.globEager('/src/assets/compozitori/*.jpg');

  return (
    <div className="compozitor-details-container">
      <h1 className="name">{compozitor.NumeCompozitor}</h1>
      <p className="description">{compozitor.Description}</p>
      <img
        className="avatar"
        src={images[`/src/assets/compozitori/${compozitor.Photo}`].default}
      />
      <div className="table-container">
        <p>Table here</p>
      </div>
    </div>
  );
}

export default CompozitoriDetailed;
