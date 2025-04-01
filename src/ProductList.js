import React from 'react';
import './ProductList.css';
import { Link } from 'react-router-dom';
import image1 from './images/1.jpg';
import image2 from './images/2.png';
import image3 from './images/3.jpg';

const ProductList = () => {
  const products = [
    {
      id: 1,
      image: image1,
      title: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 99.99,
    },
    {
      id: 2,
      image: image2,
      title: 'Product 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 49.99,
    },
    {
      id: 3,
      image: image3,
      title: 'Product 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 19.99,
    },
    {
      id: 4,
      image: image3,
      /*image: 'path/to/image.jpg',*/
      title: 'Product 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 19.99,
    }, 
    {
      id: 5,
      image: image2,
      title: 'Product 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 19.99,
    },
    {
      id: 6,
      image: image1,
      title: 'Product 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 19.99,
    }
  ];

  return (
    <div className="ProductList">
      <h1 className="ProductListTitle">Oferte speciale</h1>
      <div className="ProductListGrid">
        {products.map((product) => (
          <div key={product.id} className="ProductListItem">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} />
            </Link>
            <Link to={`/product/${product.id}`}>
              <h3>{product.title}</h3>
            </Link>
            <p>{product.description}</p>
            <p>{product.price}  Lei </p>
            <select className="ProductListSelect">
              <option value="">Selecteaza tipul</option>
              <option value="FL">FL</option>
              <option value="Concav">Concav</option>
            </select>
            <button>Adauga in cos</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;