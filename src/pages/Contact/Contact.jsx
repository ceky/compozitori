import React from 'react';

import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <p className="italic">
        Compozitorii români care doresc să fie indexați în acest catalog sunt
        bineveniți să ne contacteze pentru a ne oferi detaliile lucrărilor lor.
      </p>

      <a href="mailto:contact@catalogmuzical.ro">contact@catalogmuzical.ro</a>
    </div>
  );
}

export default Contact;
