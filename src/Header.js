import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { 
  FaShoppingCart, 
  FaUser, 
  FaSearch, 
  FaPhone, 
  FaEnvelope, 
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaMapMarkerAlt
} from 'react-icons/fa';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2); // Example cart count
  const categoriesRef = useRef(null);
  const searchInputRef = useRef(null);
  const headerRef = useRef(null);
  
  // Product categories
  const categories = [
    'Oferte Speciale',
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

  // Group categories for better display
  const columnCount = 3;
  const categoriesPerColumn = Math.ceil(categories.length / columnCount);
  const categoriesColumns = Array.from({ length: columnCount }, (_, colIndex) => 
    categories.slice(colIndex * categoriesPerColumn, (colIndex + 1) * categoriesPerColumn)
  );

  // Handle search submissions
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
    // You would typically redirect to search results page here
  };

  // Toggle categories dropdown
  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  // Focus search input when icon is clicked
  const focusSearchInput = () => {
    searchInputRef.current?.focus();
  };

  // Close categories dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (categoriesRef.current && !categoriesRef.current.contains(event.target)) {
      setIsCategoriesOpen(false);
    }
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // When opening mobile menu, close categories dropdown
    if (!mobileMenuOpen) {
      setIsCategoriesOpen(false);
    }
  };

  // Handle sticky header
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <div className="top-bar">
        <div className="container top-bar__container">
          <div className="top-bar__left">
            <a href="tel:0711111111" className="top-bar__link">
              <FaPhone className="top-bar__icon" /> 0711111111 / 0711111111
            </a>
            <a href="mailto:contact@contact.ro" className="top-bar__link">
              <FaEnvelope className="top-bar__icon" /> contact@contact.ro
            </a>
            <a href="/showroom" className="top-bar__link">
              <FaMapMarkerAlt className="top-bar__icon" /> Showroom
            </a>
          </div>
          
          <div className="top-bar__center">
            <div className="top-bar__promo-text">
              <span className="top-bar__highlight">Transport gratuit</span> pentru comenzile de peste 499 lei!
            </div>
          </div>
          
          <div className="top-bar__right">
            <a href="https://wa.me/40711111111" className="top-bar__link top-bar__link--whatsapp">
              <FaWhatsapp className="top-bar__icon" /> Comandă prin WhatsApp!
            </a>
          </div>
        </div>
      </div>

      <div className={`main-header ${isSticky ? 'main-header--sticky' : ''}`}>
        <div className="container main-header__container">
          <div className="main-header__logo">
            <Link to="/">
              <span className="logo-text">Tenis Shop</span>
            </Link>
          </div>

          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <nav className={`main-nav ${mobileMenuOpen ? 'main-nav--open' : ''}`}>
            <ul className="main-nav__list">
              <li className="main-nav__item">
                <Link to="/" className="main-nav__link">Acasă</Link>
              </li>
              <li 
                className={`main-nav__item main-nav__item--has-dropdown ${isCategoriesOpen ? 'is-active' : ''}`}
                ref={categoriesRef}
              >
                <button 
                  className="main-nav__link main-nav__dropdown-toggle"
                  onClick={toggleCategories}
                >
                  Categorii <FaChevronDown className="dropdown-icon" />
                </button>
                
                <div className="dropdown-menu categories-menu">
                  <div className="categories-menu__grid">
                    {categoriesColumns.map((columnCategories, colIndex) => (
                      <div key={colIndex} className="categories-menu__column">
                        {columnCategories.map((category, index) => (
                          <Link
                            key={`${colIndex}-${index}`}
                            to={`/category/${encodeURIComponent(category)}`}
                            className="categories-menu__link"
                            onClick={() => setIsCategoriesOpen(false)}
                          >
                            {category}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </li>
              <li className="main-nav__item">
                <Link to="/about" className="main-nav__link">Despre noi</Link>
              </li>
              <li className="main-nav__item">
                <Link to="/contact" className="main-nav__link">Contact</Link>
              </li>
              <li className="main-nav__item">
                <Link to="/payment" className="main-nav__link">Livrare și plată</Link>
              </li>
            </ul>
          </nav>

          <div className="search-bar">
            <form onSubmit={handleSearch}>
              <div className="search-bar__input-wrapper">
                <input
                  type="text"
                  className="search-bar__input"
                  placeholder="Caută produse..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  ref={searchInputRef}
                />
                <button 
                  type="submit" 
                  className="search-bar__button"
                  onClick={focusSearchInput}
                >
                  <FaSearch className="search-bar__icon" />
                </button>
              </div>
            </form>
          </div>

          <div className="user-actions">
            <Link to="/register" className="user-actions__link">
              <FaUser className="user-actions__icon" />
              <span className="user-actions__text">Cont</span>
            </Link>
            <Link to="/cart" className="user-actions__link user-actions__link--cart">
              <div className="cart-icon-wrapper">
                <FaShoppingCart className="user-actions__icon" />
                {cartCount > 0 && (
                  <span className="cart-count">{cartCount}</span>
                )}
              </div>
              <span className="user-actions__text">Coș</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;