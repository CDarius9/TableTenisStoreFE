import React, { useState } from 'react';
import './NewsletterSubscription.css';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add your newsletter subscription logic here
    setSubscribed(true);
    setEmail('');
  };

  return (
    <div className="newsletter-subscription">
      <div className="newsletter-content">
        <h2>RAMAI CONECTAT!</h2>
        <p>Abonează-te la newsletter-ul nostru și fii primul care află despre cele mai noi produse, oferte exclusive și actualizări interesante!</p>
        {subscribed ? (
          <p className="success-message">Îți mulțumim pentru abonare!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                type="email"
                placeholder="Introdu adresa ta de email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Abonează-te</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default NewsletterSubscription;