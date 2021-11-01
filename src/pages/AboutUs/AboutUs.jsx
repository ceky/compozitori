import React from 'react';

import './AboutUs.css';

function AboutUs() {
  const images = import.meta.globEager('/src/assets/Corina.jpg');

  return (
    <div className="about-us-container">
      <p>
        Platforma <strong>CatalogMuzical.ro</strong> vine în întâmpinarea
        nevoilor tuturor profesioniștilor din muzică clasică de informații
        concise și utile cu privire la operele compozitorilor români. Ea conține
        informațiile esențiale pentru identificarea și localizarea lucrărilor
        muzicale – anul compoziției, instrumentație, categoriile muzicale, locul
        de unde pot fi achiziționate partiturile șamd., funcționând că un motor
        de căutare online. Este prima platforma care permite căutarea și
        filtrarea de informații pe categorii muzicale instrumentale.
      </p>

      <p>
        Din păcate, în prezent, cărțile sau enciclopediile care conțin
        informații despre operele compozitorilor români nu mai sunt disponibile
        pe rafturile librăriilor. În plus, catalogarea operelor clasice se
        axează de regulă pe repertoriul fiecărui compozitor și nu pe tipul de
        instrumente folosite (ex.: muzică pentru vioară, muzică pentru soprană,
        etc.), din acest motiv, resursele muzicienilor de a interpreta lucrări
        românești se limitează la cunoștințele proprii sau ale profesorilor.
      </p>

      <p>
        <strong>Catalogmuzical.ro</strong> agregă într-un singur loc
        informațiile esențiale despre lucrările compozitorilor români astfel
        încât să fie ușor de găsit de către toți cei interesați: de la elevi,
        studenți sau profesori la instrumentiști, dirijori, manageri de
        filarmonici sau orchestre, la publicul larg iubitor de muzică clasică.
      </p>
      <p>
        {' '}
        În viitor, datele agregate din platforma vor putea genera statistici
        utile în rapoartele diverselor instituții culturale sau în mediul
        academic, cu privire la istoria și evoluția muzicii clasice din România.{' '}
        <strong>Catalogmuzical.ro</strong> este primul pas dintr-un proces mai
        lung de cartografiere a muzicii clasice românești, fiind în continuă
        dezvoltare și actualizare.{' '}
      </p>
      <p>
        Suntem conștienți că majoritatea lucrărilor nu sunt disponibile nicăieri
        pentru a putea fi descărcate și interpretate, de aceea proiectul{' '}
        <strong>Catalogmuzical.ro </strong>
        reprezintă doar prima etapă în demersul nostru de cartografiere a
        muzicii clasice românești.
      </p>
      <p>
        Pe termen lung ne dorim să actualizăm baza de date și cu repertoriul
        compozitorilor români contemporani, astfel încât muzicienii și
        instituțiile culturale să poată avea o imagine mai completă a lucrărilor
        contemporane, iar accesul la ele și procurarea lor să devină mai facile.
      </p>
      <p>
        {' '}
        Inițiatoarea acestui proiect este{' '}
        <strong>Corina Ciuplea - Țurcan</strong>, editor și tehnoredactor de
        partituri muzicale.
      </p>
      <p>
        În prezent este editor în cadrul European FilmPhilharmonic Institute din
        Berlin și colaboreaza cu compozitori, instituții culturale și edituri
        din România și Germania. În ultimii ani a tehnoredactat și editat peste
        40 de lucrări de muzică clasică românească, atât pentru compozitori
        români independenți cât și pentru instituții sau orchestre de stat.
      </p>
      <p>
        {' '}
        Experiența ei de lucru cu manuscrise vechi și muzică contemporană
        dobândită pe plan european au dus la colaborări importante cu impact
        asupra patrimoniului de muzică clasică românească. Din această nevoie de
        centralizare în premieră în format digital a miilor de lucrări
        românești, indexate și catalogate prin intermediul unui motor de
        căutare, Corina Ciuplea - Țurcan, alaturi de echipa ei formată din
        Larisa Retegan – editor de partituri și Corina Gheorghe – violonistă, au
        pus bazele proiectului
        <strong> Catalog Muzical</strong>, proiect co-finanțat de{' '}
        <strong>Administrația Fondului Cultural Național.</strong>
      </p>

      <p>Surse:</p>
      <p>
        Biblioteci, colecția personală de partituri, cataloage sau dicționare
      </p>

      <ul>
        <li>
          Repertoriul general al creaţiei muzicale româneşti de Mihai Popescu,
          Bucureşti, Editura Muzicală: Vol.1 (1978), Vol.2 (1981), supliment
          (1987){' '}
        </li>
        <li>
          Dicționare de specialitate – Muzicieni din România – de Viorel Cosma
          vol. 1–10 (1989–2012){' '}
        </li>
        <li>
          Petre Brâncuși – Istoria muzicii românești ( Editura Muzicală - 1969){' '}
        </li>
        <li>Mihail Gr. Poslusnicu - Istoria muzicei la Români (1928) </li>
        <li>
          Cornelia Angelescu – Antologia liedului românesc secolul XIX (Ed.
          Fundației de Mâine, 2006){' '}
        </li>
        <li>
          Stoianov Carmen, Stoianov Petru – Istoria muzicii românești (Ed.
          Fundației de Mâine, 2005){' '}
        </li>
        <li>
          Valentin Ghita - Repertoriul creației muzicale românești pentru
          instrumente de suflat{' '}
        </li>
      </ul>

      <p>
        Surse online: imslp.org, Wikipedia.ro , http://www.ucmr.org.ro,
        www.cimec.ro, www.romanianmusiconline.com, jurnaluldedrajna.ro,
        website-uri personale ale compozitorilor.
      </p>
      <p>
        Criteriul cronologic a fost respectat doar în cadrul creației aceluiași
        compozitor.
      </p>
    </div>
  );
}

export default AboutUs;
