import React from 'react';

import './AboutUs.css';

function AboutUs() {
  const images = import.meta.globEager('/src/assets/Corina.jpg');

  return (
    <div className="about-us-container">
      <div className="image-container">
        <img
          className="avatar"
          src={images['/src/assets/Corina.jpg'].default}
        />
        <p>credit: Andreea Retinschi</p>
      </div>

      <p>
        Inițiatoarea acestui proiect este Corina Ciuplea - Țurcan, editor și
        tehnoredactor de partituri muzicale.{' '}
      </p>

      <p>
        În prezent este editor colaborator pentru Orchestrele Radio România,
        European FilmPhilharmonic Institute din Berlin și colaboreaza cu
        compozitori, instituții culturale și edituri din Romania și Germania. In
        ultimii ani a tehnoredactat și editat peste 40 de lucrări de muzică
        clasică romaneasca, atât pentru compozitori români independenți cât și
        pentru instituții sau orchestre de stat.{' '}
      </p>

      <p>
        Experiența ei de lucru cu manuscrise vechi și muzică contemporană
        dobândită pe plan european au dus la colaborări importante cu impact
        asupra patrimoniului de muzică clasică românească. Din această nevoie de
        centralizare în premieră în format digital a miilor de lucrări
        românești, indexate și catalogate prin intermediul unui motor de
        căutare, Corina Ciuplea - Țurcan, alaturi de echipa ei formată din
        muzicieni profesioniști, a pus bazele proiectului Catalog Muzical.{' '}
      </p>
    </div>
  );
}

export default AboutUs;
