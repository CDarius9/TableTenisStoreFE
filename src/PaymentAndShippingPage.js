import React from 'react';
import './PaymentAndShippingPage.css';

const PaymentAndShippingPage = () => {
  return (
    <div className="payment-and-shipping-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Plată și Livrare</h1>
          <p>Informații despre opțiunile de plată și livrare.</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Costuri de Transport</h2>
              <p>Prețurile afișate pe site nu conțin costuri de transport!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Opțiuni de Livrare</h2>
              <p>
                Reprezentanții firmei Meister Sport S.R.L expediază produsele în toată țara indiferent de zona sau valoarea comenzii, apelăm la cele mai rapide variante de expediere astfel încât comanda să ajungă foarte repede la client:
              </p>
              <ul>
                <li>
                  <strong>Nou - Plata cu cardul direct în magazin!</strong> Produsele se pot achiziționa de la sediul Meister Sport, în ziua și la ora stabilită cu agentul de vânzări.
                </li>
                <li>
                  <strong>Servicii de curierat rapid:</strong> Fan Courier, Urgent Courier, Cargus, Nemo (toate firmele de curierat rapid) livrează în toată țara ajungând la destinație rapid, în zilele lucrătoare, în funcție de zona și Courierul local, dar numai după stabilirea exactă a cantității, volumului și zonei geografice. Toate termenele de livrare trebuie să respecte zilele libere legale.
                </li>
                <li>
                  <strong>Poșta Română:</strong> Livrează în toată țara prin serviciile de mesagerie oferite de Poșta Română. Tariful unui pachet simplu de maxim 1 kg, expediat prin Poșta Română este de 5 lei (TVA inclus). Livrarea produselor se face în funcție de volum, greutate și zona în termenul de 60 zile de la comandă.
                </li>
              </ul>
              <p>
                Modalitatea de transport se stabilește înainte de livrarea produselor către client. Costurile de transport pot varia în funcție de greutate, volum și zona geografică.
              </p>
              <p>
                Dacă adresa sau datele de contact ale clientului nu sunt valide, comanda se anulează imediat.
              </p>
              <ul>
                <li>Produsele se livrează la adresa indicată în comandă și confirmată telefonic.</li>
                <li>Expedierea produselor se face după confirmarea fermă a comenzii.</li>
                <li>Produsele din colet vor fi ambalate astfel încât să ajungă în siguranță și sunt însoțite de factură.</li>
              </ul>
              <p>
                Dacă produsele aflate pe stoc se epuizează în timpul desfășurării comenzilor, comenzile lansate vor fi onorate ulterior când produsele vor intra pe stoc.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Livrare Greșită</h2>
              <p>
                Dacă, din greșeală, vi s-a livrat alt produs decât cel comandat, semnalați acest lucru către tenismasa.ro și returnați produsul cât mai curând pentru a fi înlocuit. Costul transportului produselor (atât cel returnat, cât și cel înlocuitor) va fi suportat integral de către tenismasa.ro.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Modalități de Plată</h2>
              <ul>
                <li>Ramburs prin Fan Courier sau orice firmă de curierat agreată de cumpărător.</li>
                <li>Cash conform bonului fiscal eliberat în cazul în care produsele se ridică de la sediu.</li>
                <li>Ordin de plată conform facturii proforme.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentAndShippingPage;