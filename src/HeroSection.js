import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './HeroSection.css';
import image1 from './a3.jpg';
import image2 from './b.jpg';

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="hero">
      <div className="hero__background">
        <div className="hero__gradient-top"></div>
        <div className="hero__gradient-bottom"></div>
      </div>
      
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        showArrows={true}
        onChange={handleSlideChange}
        selectedItem={activeSlide}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <button 
            className="hero__arrow hero__arrow--prev" 
            onClick={clickHandler}
            disabled={!hasPrev}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <button 
            className="hero__arrow hero__arrow--next" 
            onClick={clickHandler}
            disabled={!hasNext}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        )}
        renderIndicator={(clickHandler, isSelected, index) => (
          <div
            key={index}
            className={`hero__indicator ${isSelected ? 'hero__indicator--active' : ''}`}
            onClick={clickHandler}
          />
        )}
      >
        {/* Slide 1 */}
        <div className="hero__slide">
          <div className="hero__slide-overlay"></div>
          <img src={image1} alt="Table Tennis Equipment" className="hero__slide-image" />
          
          <div className="hero__content-wrapper">
            <div className="hero__content hero__content--centered">
              <div className="hero__label">Bun venit în lumea tenisului de masă</div>
              <h1 className="hero__title">BINE ATI VENIT!</h1>
              <div className="hero__divider"></div>
              <p className="hero__description">Descoperiți colecția noastră de produse de înaltă calitate.</p>
              
              <div className="hero__features">
                <div className="hero__feature">
                  <div className="hero__feature-icon"></div>
                  <div className="hero__feature-text">Premium</div>
                </div>
                <div className="hero__feature">
                  <div className="hero__feature-icon"></div>
                  <div className="hero__feature-text">Garantat</div>
                </div>
                <div className="hero__feature">
                  <div className="hero__feature-icon"></div>
                  <div className="hero__feature-text">Rapid</div>
                </div>
              </div>
              
              <button className="hero__button">
                <span>Cumpără acum</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Slide 2 */}
        <div className="hero__slide">
          <div className="hero__slide-overlay hero__slide-overlay--gradient"></div>
          <img src={image2} alt="Special Offers" className="hero__slide-image" />
          
          <div className="hero__content-wrapper">
            <div className="hero__content hero__content--centered">
              <div className="hero__label hero__label--accent">Timp limitat</div>
              <h1 className="hero__title">PROMOTIE SPECIALA!</h1>
              <div className="hero__divider"></div>
              <p className="hero__description">BENEFICIAȚI ACUM DE URMĂTOARELE REDUCERI:</p>
              
              <div className="hero__discount-grid">
                <div className="hero__discount-item">
                  <div className="hero__discount-amount">10%</div>
                  <div className="hero__discount-threshold">550 lei</div>
                </div>
                
                <div className="hero__discount-item">
                  <div className="hero__discount-amount">15%</div>
                  <div className="hero__discount-threshold">1150 lei</div>
                </div>
                
                <div className="hero__discount-item">
                  <div className="hero__discount-amount">20%</div>
                  <div className="hero__discount-threshold">1550 lei</div>
                </div>
                
                <div className="hero__discount-item">
                  <div className="hero__discount-amount">25%</div>
                  <div className="hero__discount-threshold">1850 lei</div>
                </div>
              </div>
              
              <button className="hero__button hero__button--accent">
                <span>Vezi ofertele</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Carousel>
      
      <div className="hero__scroll-down">
        <span>Scroll</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;