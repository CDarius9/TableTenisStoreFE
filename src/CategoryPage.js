import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './CategoryPage.css';
import CategoryList from './CategoryList';

import image1 from './images/1.jpg';
import image2 from './images/2.png';
import image3 from './images/3.jpg';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [sortOption, setSortOption] = useState('');
  const [brandFilter, setBrandFilter] = useState('');

  // Hardcoded products for the selected category
  const products = [
    { id: 1, image: image1, title: 'Product 1', description: 'Lorem ipsum dolor sit amet', price: 99.99, brand: 'Donic' },
    { id: 2, image: image2, title: 'Product 2', description: 'Consectetur adipiscing elit', price: 79.99, brand: 'Tibhar' },
    { id: 3, image: image3, title: 'Product 3', description: 'Sed do eiusmod tempor', price: 59.99, brand: 'Gewo' },
    { id: 4, image: image1, title: 'Product 4', description: 'Incididunt ut labore', price: 49.99, brand: 'Xiom' },
    { id: 5, image: image2, title: 'Product 5', description: 'Dolore magna aliqua', price: 39.99, brand: 'Xiom' },
    { id: 6, image: image3, title: 'Product 6', description: 'Ut enim ad minim veniam', price: 29.99, brand: 'Donic' },
    { id: 7, image: image1, title: 'Product 7', description: 'Quis nostrud exercitation', price: 19.99, brand: 'Gewo' },
    { id: 8, image: image2, title: 'Product 8', description: 'Ullamco laboris nisi', price: 9.99, brand: 'Tibhar' },
  ];

  // Get unique brands from products
  const brands = [...new Set(products.map(product => product.brand))];

  // Filter products based on selected brand
  const filteredProducts = brandFilter ? products.filter(product => product.brand === brandFilter) : products;

  // Sort products based on the selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'price-asc') {
      return a.price - b.price;
    } else if (sortOption === 'price-desc') {
      return b.price - a.price;
    } else if (sortOption === 'name-asc') {
      return a.title.localeCompare(b.title);
    } else if (sortOption === 'name-desc') {
      return b.title.localeCompare(a.title);
    }
    return 0;
  });

  return (
    <div className="CategoryPage">
      <CategoryList />
      <div className="CategoryPageContainer">
        <div className="CategoryPageSidebar">
          {/* Sidebar content */}
        </div>
        <div className="CategoryPageContent">
          <h1>{categoryName}</h1>
          <div className="CategoryPageSortFilterContainer">
            <div className="CategoryPageSortFilter">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="">Sorteaza dupa:</option>
                <option value="price-asc">Pret: Crescator</option>
                <option value="price-desc">Pret: Descrescator</option>
                <option value="name-asc">Nume: A - Z</option>
                <option value="name-desc">Nume: Z - A</option>
              </select>
            </div>
            <div className="CategoryPageBrandFilter">
              <select
                value={brandFilter}
                onChange={(e) => setBrandFilter(e.target.value)}
              >
                <option value="">Toti producatorii</option>
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="CategoryPageProductGrid">
            {sortedProducts.map((product) => (
              <div key={product.id} className="CategoryPageProductItem">
                <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} />
            </Link>
                
            <Link to={`/product/${product.id}`}>
              <h3>{product.title}</h3>
              </Link>
                <p>{product.description}</p>
                <p className='CategoryPagePrice'>{product.price}  Lei </p>
                <select className="CategoryPageProductSelect">
                  <option value="">Selecteaza tipul</option>
                  <option value="FL">FL</option>
                  <option value="Concav">Concav</option>
                </select>
                <button>Adauga in cos</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;