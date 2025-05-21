import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logoImg from '../../assets/img/common/logo.png';
import useNavbarAnimation from '../../hooks/useNavbarAnimation'; 
import { useCart } from '../../context/cartContext'; 
import Cart from '../common/Cart';
import { useCartUI } from '../../context/cartUIContext';


const Navbar = () => {
  const showNavbar = useNavbarAnimation();
  const navRef = useRef(null);
  const { t } = useTranslation('common');
  const { cartItems } = useCart(); //NUMERO DE PRODUCTOS

  const { isCartOpen, openCart, closeCart } = useCartUI();




  useEffect(() => {
    if (navRef.current) {
      const height = navRef.current.offsetHeight;
      document.documentElement.style.setProperty('--navbar-height', `${height}px`);
    }
  }, []);

  return (
    <nav
      ref={navRef}
      className={`sticky top-0 z-30 px-6 flex justify-between items-center bg-white shadow-sm transition-transform duration-300 h-26 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-5xl mx-auto flex justify-between items-center w-full">
        {/* Logo */}
        <Link to="/">
          <img src={logoImg} alt="Logo" className="w-32 h-32" />
        </Link>

        {/* Navigation Links */}
        <ul className="flex gap-6">
          <li>
            <Link className="navbar-text" to="/">
              {t('navbar.home')}
            </Link>
          </li>
          <li>
            <Link className="navbar-text" to="/us">
              {t('navbar.us')}
            </Link>
          </li>
          <li>
            <Link className="navbar-text" to="/menu">
              {t('navbar.menu')}
            </Link>
          </li>
          <li>
            <Link className="navbar-text" to="/reservation">
              {t('navbar.reservation')}
            </Link>
          </li>
          <li>
            <Link className="navbar-text" to="/delivery">
              {t('navbar.delivery')}
            </Link>
          </li>
        </ul>

        {/* Cart */}
        <div className="flex items-center gap-4">
          <button
            onClick={openCart}
            className="relative cursor-pointer"
            aria-label="Open cart"
          >
            <svg
              className="h-6 w-6 text-gray-600 hover:text-[#9C7696]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 3h12.5M7 13V6h13"
              />
            </svg>
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#9C7696] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>
        </div>

        {/* Cart Modal */}
        <Cart isOpen={isCartOpen} onClose={closeCart} />
      </div>
    </nav>
  );
};

export default Navbar;