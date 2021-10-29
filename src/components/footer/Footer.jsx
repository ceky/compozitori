import React from 'react';
import './Footer.css';

function Footer() {
  const images = import.meta.globEager('/src/assets/logo_footer.png');

  return (
    <footer>
      <img
        className="avatar"
        src={images['/src/assets/logo_footer.png'].default}
      />
      <div>
        <p>
          Proiect cultural co-finanțat de Administraţia Fondului Cultural
          Naţional (AFCN).{' '}
        </p>
        <p>
          {' '}
          Proiectul nu reprezintă în mod necesar poziţia Administrației Fondului
          Cultural Național. <br />
          AFCN nu este responsabilă de conținutul proiectului sau de modul în
          care rezultatele proiectului pot fi folosite.
          <br />
          Acestea sunt în întregime responsabilitatea beneficiarului finanțării.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
