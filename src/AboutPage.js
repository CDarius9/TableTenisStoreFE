import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Despre Noi</h1>
          <p>Descoperă pasiunea din spatele magazinului nostru online de tenis de masă.</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Povestea Noastră</h2>
              <p>
                Fondat de un grup de pasionați de tenis de masă, magazinul nostru online s-a născut dintr-o dragoste comună pentru acest sport. Cu ani de experiență și o înțelegere profundă a jocului, ne-am propus să creăm o platformă care să satisfacă nevoile jucătorilor de toate nivelurile.
              </p>
              <p>
                Misiunea noastră este de a oferi echipamente de tenis de masă de înaltă calitate, sfaturi de specialitate și servicii excepționale pentru clienți. Selectăm cu atenție gama noastră de produse, colaborând cu mărci renumite pentru a vă aduce cele mai bune echipamente de pe piață.
              </p>
            </div>
            <div className="col-md-6">
              <img src="path/to/story-image.jpg" alt="Povestea Noastră" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div className="section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6 order-md-2">
              <h2>Echipa Noastră</h2>
              <p>
                În spatele magazinului nostru online se află o echipă dedicată de pasionați și profesioniști ai tenisului de masă. De la personalul nostru de asistență pentru clienți, cu experiență, până la specialiștii noștri în produse, fiecare membru al echipei noastre împărtășește un obiectiv comun: să vă ajute să vă îmbunătățiți jocul.
              </p>
              <p>
                Ne angajăm să oferim asistență personalizată, indiferent dacă sunteți un începător în căutarea primei palete sau un jucător experimentat în căutarea unui echipament avansat. Echipa noastră este întotdeauna pregătită să răspundă la întrebările dumneavoastră, să ofere recomandări și să vă ghideze în călătoria dumneavoastră în tenisul de masă.
              </p>
            </div>
            <div className="col-md-6 order-md-1">
              <img src="path/to/team-image.jpg" alt="Echipa Noastră" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Promisiunea Noastră</h2>
              <p>
                La magazinul nostru online de tenis de masă, ne angajăm să oferim o experiență de cumpărare excepțională. Promitem să:
              </p>
              <ul>
                <li>Oferim o gamă largă de produse de tenis de masă de cea mai bună calitate</li>
                <li>Oferim sfaturi de specialitate și recomandări personalizate</li>
                <li>Asigurăm o expediere rapidă și fiabilă</li>
                <li>Oferim servicii excepționale pentru clienți</li>
                <li>Inovăm și îmbunătățim continuu ofertele noastre</li>
              </ul>
            </div>
            <div className="col-md-6">
              <img src="path/to/promise-image.jpg" alt="Promisiunea Noastră" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;