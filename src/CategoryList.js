import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryList.css';

const CategoryList = () => {
  const categories = [
    'Catalog produse',
    'OFERTE SPECIALE',
    'Lemne',
    'Fete',
    'Solutii de lipit si curatat',
    'Tricouri',
    'Tricouri copii',
    'Sorturi',
    'Sorturi copii',
    'Treninguri',
    'Treninguri copii',
    'Incaltaminte sport',
    'Sosete',
    'Mese si accesorii',
    'Mingi',
    'Geci si hanorace',
    'Genti si huse',
    'Palete preasamblate',
    'Roboti',
    'Suveniruri',
    'Prosoape',
    'Banda de cant',
    'Palete predefinite',
  ];

  return (
    <div className="CategoryList">
      <h2>Categorii</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
                        <Link to={`/category/${encodeURIComponent(category)}`}>{category}</Link>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;