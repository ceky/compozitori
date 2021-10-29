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
        Inițiatoarea acestui proiect este{' '}
        <strong>Corina Ciuplea - Țurcan</strong>, editor și tehnoredactor de
        partituri muzicale.{' '}
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

      <p>
        Proiectul Catalog Muzical isi propune digitalizarea si agregarea
        informatiilor despre lucrarile compozitorilor romani intr-un singur loc,
        care sa fie accesibil tuturor, la un click distanta. O platforma online
        care sa inglobeze detaliile esentiale despre o lucrare muzicala ( anul
        compozitie, stilul muzical, intrumentele folosite, unde este disponibila
        etc.) astfel incat sa fie usor de gasit de catre cei interesati.
        Catalogmuzical.ro vine in intampinarea nevoilor tuturor profesionistilor
        din muzica clasica de informatii rapide, concise si utile. Platforma va
        functiona ca un punct de referinta pentru identificarea si localizarea
        lucrarilor muzicale apartinand compozitorilor romani. Cu toate ca exista
        informatii despre fiecare compozitor roman in parte, in diverse carti de
        istorie sau carti biografice, nu exista un loc care sa centralizeze o
        lista a lucrarilor compuse de toti compozitorii de muzica clasica din
        Romania. Sunt cateva carti vechi si dictionare care catalogheaza
        lucrarile acestora, insa informatiile sunt incomplete, neactualizate si
        disparate.
      </p>
    </div>
  );
}

export default AboutUs;
