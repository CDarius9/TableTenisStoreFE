import React, { useState } from 'react';
import './ProductPage.css';
import { Link } from 'react-router-dom';
import image1 from './images/1.jpg';
import image2 from './images/2.png';
import image3 from './images/3.jpg';
import CategoryList from './CategoryList';

const ProductPage = () => {
  const [activeTab, setActiveTab] = useState('specifications');

  const product = {
    id: 1,
    images: [image1, image1, image1, image1],
    title: 'Pachet Paleta de control - Donic Waldner Exclusive AR & Donic Acuda S2 & Mingi Donic Avantgarde***',
    description: 'Pachetul este  conceput pentru a intampina jucatorii de tenis cu o formula testata si indelung cercetata, pentru a lua decizia corecta in alegerea paletei. Montajul lipit fetele pe lemn cu adeziv pe baza de apa,  taiat fetele, banda de cant este asigurat gratuit la cerere',
    price: 99.99,
    rating: 4.5,
    reviews: [
      { id: 1, author: 'Mihai Alexandru', text: 'Bun produs!' },
      { id: 2, author: 'Andreea Ioana', text: 'Recomand!' },
      { id: 2, author: 'Gheorghe Luca', text: 'O alegere buna!' },
    ],
    specifications: [
      { id: 1, name: 'Material', value: 'Wood' },
      { id: 2, name: 'Dimensions', value: '15 x 10 x 2 cm' },
      { id: 2, name: 'Greutate', value: '85g' },
    ],
    
  };

  const relatedProducts = [
    { id: 2, image: image2, title: 'Related Product 1', price: 79.99 },
    { id: 3, image: image3, title: 'Related Product 2', price: 89.99 },
  ];

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="ProductPage">
      <CategoryList />
      <div className="ProductPageContainer">
        <div className="ProductImageSection">
          <div className="ProductMainImage">
            <img src={product.images[0]} alt={product.title} />
          </div>
          <div className="ProductThumbnails">
            {product.images.slice(1).map((image, index) => (
              <img key={index} src={image} alt={`Product Thumbnail ${index + 1}`} />
            ))}
          </div>
        </div>
        <div className="ProductDetails">
          <h1 className="ProductTitle">{product.title}</h1>
          <div className="ProductRating">
            <span className="ProductRatingScore">{product.rating}</span>
            <span className="ProductRatingCount">({product.reviews.length} Recenzii)</span>
          </div>
          <p className="ProductPrice">{product.price}  Lei </p>
          <p className="ProductDescription">{product.description}</p>
          <div className="ProductOptions">
            <select className="ProductSelect">
              <option value="">Selecteaza tipul</option>
              <option value="FL">FL</option>
              <option value="Concav">Concav</option>
            </select>
            <button className="AddToCartButton">Adauga in cos</button>
          </div>
          <div className="ProductTabs">
            <div className="ProductTabHeaders">
              <div
                className={`ProductTabHeader ${activeTab === 'specifications' ? 'active' : ''}`}
                onClick={() => toggleTab('specifications')}
              >
                Specificatii
              </div>
              <div
                className={`ProductTabHeader ${activeTab === 'reviews' ? 'active' : ''}`}
                onClick={() => toggleTab('reviews')}
              >
                Recenzii
              </div>
            </div>
            <div className="ProductTabContent">
              {activeTab === 'specifications' && (
                <ul className="ProductSpecifications">
                  {product.specifications.map((spec) => (
                    <li key={spec.id} className="ProductSpecification">
                      {spec.name}: {spec.value}
                    </li>
                  ))}
                </ul>
              )}
              {activeTab === 'reviews' && (
                <div className="ProductReviews">
                  {product.reviews.map((review) => (
                    <div key={review.id} className="ProductReview">
                      <p className="ProductReviewText">{review.text}</p>
                      <p className="ProductReviewAuthor">By {review.author}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="RelatedProducts">
            <h2 className="RelatedProductsTitle">Related Products</h2>
            <div className="RelatedProductsGrid">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="RelatedProduct">
                  <Link to={`/product/${product.id}`}>
                    <img src={relatedProduct.image} alt={relatedProduct.title} />
                    </Link>
                    <Link to={`/product/${product.id}`}>
                      <h3 className="RelatedProductTitle">{relatedProduct.title}</h3>
                      </Link>
                  <p className="RelatedProductPrice">{relatedProduct.price} Lei </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;