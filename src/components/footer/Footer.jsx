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
    </footer>
  );
}

export default Footer;
