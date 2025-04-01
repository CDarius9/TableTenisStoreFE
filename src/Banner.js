import React from 'react';
import Slider from 'react-slick';
import './Banner.css';


const banners = [
  {
    title: 'Oferim consultanta pentru alegerea articolelor sportive potrivite! Contecteaza-ne la 0728747067 sau 0727903858 !',
    subtitle: ''
  },
  {
    title: 'Pentru toate fetele si lemnele achizitionate din magazinul nostru, asiguram montajul gratuit cu banda de cant inclusa!',
    subtitle: ''
  }
];

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true
  };

  return (
    <div className="Banner">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index}>
            <h2>{banner.title}</h2>
            <h3>{banner.subtitle}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
