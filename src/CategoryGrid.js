import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryGrid.css';
import paleta from './paleta.svg';
import rubber from './rubber.svg';
import lemn from './lemn.svg';
import masa from './masa.svg';
import all from './all.svg';

const CategoryGrid = () => {
  const categories = [
    { 
      name: 'Lemne', 
      img: paleta,
      itemCount: 42
    },
    { 
      name: 'Fete', 
      img: rubber,
      itemCount: 67
    },
    { 
      name: 'Palete', 
      img: lemn,
      itemCount: 38
    },
    { 
      name: 'Mese si accesorii', 
      img: masa,
      itemCount: 24
    },
    { 
      name: 'Toate categoriile', 
      img: all,
      featured: true
    }
  ];

  return (
    <div className="categories-wrapper">
      <div className="categories">
        {categories.map((category, index) => (
          <Link 
            to={`/category/${encodeURIComponent(category.name)}`} 
            className={`category-item ${category.featured ? 'category-item--featured' : ''}`}
            key={index}
          >
            <div className="category-icon">
              <img src={category.img} alt={category.name} />
            </div>
            <div className="category-info">
              <div className="category-name">{category.name}</div>
              {category.itemCount && (
                <div className="category-count">{category.itemCount}</div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;