import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import HeroSection from './HeroSection';
import CategoryGrid from './CategoryGrid';
import ProductList from './ProductList';
import Banner from './Banner';
import BrandShowcase from './BrandShowcase';
import Footer from './Footer';
import ProductPage from './ProductPage';
import CategoryPage from './CategoryPage';
import RegisterPage from './RegisterPage'; 
import NewsletterSubscription from './NewsletterSubscription';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
import PaymentAndShippingPage from './PaymentAndShippingPage';





function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <CategoryGrid />
              <Banner />
              <ProductList />
              <BrandShowcase />
              <NewsletterSubscription /> 

            </>
          } />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/register" element={<RegisterPage />} /> 
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/payment" element={<PaymentAndShippingPage />} />




        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;