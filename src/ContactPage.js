import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook } from 'react-icons/fa';
import './ContactPage.css';

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contactați-ne!</h1>
        <p>Vă stăm la dispoziție cu toate informațiile de care aveți nevoie.</p>
        <div className="store-hours">
          <h2>Program Magazin</h2>
          <p>Luni - Vineri: 10:00 - 18:00</p>
          <p>Sâmbătă - Duminică: Închis</p>
          <p>Pentru situații speciale, putem deschide și în afara programului, cu solicitare telefonică în prealabil.</p>
        </div>
        <div className="map-container">
        <iframe
          title="Store Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9045.920400559855!2d26.02455082944905!3d44.42728702618319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201b5f3164efb%3A0xf58f1b78be7f0c97!2sPlaza%20Romania!5e0!3m2!1sen!2sro!4v1714184629444!5m2!1sen!2sro"
          
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
          </div>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h3>Adresă</h3>
              <p>Bd. Timișoara 26, București, România</p>
              <p>Incinta Plaza Romania</p>
            </div>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <div>
              <h3>Telefon</h3>
              <p>0711.111.111 | 0711.111.111</p>
            </div>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div>
              <h3>Email</h3>
              <p>contact@contact.ro</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <h2>Trimite-ne un mesaj</h2>
          <form>
            <div className="form-group">
              <input type="text" id="name" name="name" placeholder="Nume" required />
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <textarea id="message" name="message" placeholder="Mesaj" required></textarea>
            </div>
            <button type="submit">Trimite</button>
          </form>
        </div>
      </div>
      <div className="additional-info">
        
        <div className="facebook-section">
          <h2>Urmăriți-ne pe Facebook</h2>
          <p>Pentru ultimele oferte și noutăți, urmăriți-ne pe pagina de Facebook.</p>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="facebook-icon" />
            Magazin Tenis Masa
          </a>
        </div>
      </div>
     
    </div>
  );
}

export default ContactPage;