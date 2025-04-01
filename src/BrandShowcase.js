import React from 'react';
import './BrandShowcase.css';
import xiom from './images/xiom.jpg';
import donic from './images/donic.png';
import nittaku from './images/nittaku.png';

const BrandShowcase = () => {
  const brands = [
    {
      id: 1,
      name: 'Brand 1',
      image: xiom,
    },
    {
      id: 2,
      name: 'Brand 2',
      image: donic,
    },
    {
      id: 3,
      name: 'Brand 3',
      image: nittaku,
    },
    
    {
      id: 3,
      name: 'Brand 3',
      image: donic,
    },
    
    {
      id: 3,
      name: 'Brand 3',
      image: nittaku,
    },
    
    {
      id: 3,
      name: 'Brand 3',
      image: xiom,
    },
   
  ];

  return (
    <div className="BrandShowcase">
      <h2 className="BrandShowcaseTitle">Branduri cu care lucram:</h2>
      <div className="BrandGrid">
        {brands.map((brand) => (
          <div key={brand.id} className="BrandItem">
            <img src={brand.image} alt={brand.name} />
            <p>{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandShowcase;
