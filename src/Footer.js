import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="FooterMenu">
        <div className="FooterColumn">
          <h3>Informatii</h3>
          <ul>
            <li>Despre noi</li>
            <li>Contact</li>
            <li>Livrare si retur</li>
            <li>Termeni si conditii</li>
            <li>Politica de confidentialitate</li>
          </ul>
        </div>
        <div className="FooterColumn">
          <h3>Produse</h3>
          <ul>
            <li>Mese de tenis de masa</li>
            <li>Rachete de tenis de masa</li>
            <li>Mingi de tenis de masa</li>
            <li>Accesorii</li>
          </ul>
        </div>
        <div className="FooterColumn">
          <h3>Servicii</h3>
          <ul>
            <li>Program de fidelizare</li>
            <li>Garantie</li>
            <li>Asistenta tehnica</li>
            <li>Intretinere si reparatii</li>
          </ul>
        </div>
      </div>
      <div className="FooterCopyright">
        <p>&copy; 2024. Toate drepturile rezervate. ANPC</p>
      </div>
    </footer>
  );
};

export default Footer;
