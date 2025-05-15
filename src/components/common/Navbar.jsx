import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/img/common/logo.png';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
      <div className='max-w-5xl mx-auto flex justify-between items-center w-full'>
        <div className="text-xl font-semibold text-gray-800">
        <Link to="/">
          <img src={logoImg} alt="Logo" className="w-32 h-32" />
        </Link>
      </div>

      <ul className="hidden md:flex gap-6 items-center">
        <li><Link className="text-custom" to="/">Inicio</Link></li>
        <li><Link className="text-custom" to="/nosotros">Nosotros</Link></li>
        <li><Link className="text-custom" to="/menu">Menú</Link></li>
        <li><Link className="text-custom" to="/reservas">Reservas</Link></li>
        <li><Link className="text-custom" to="/domicilios">Domicilios</Link></li>
      </ul>

      <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
        <svg className="h-6 w-6 text-gray-600 hover:text-[#FFB6C1]" fill="currentColor" viewBox="0 0 32 32">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
      </a>
      </div>
    </nav>
  );
};

export default Navbar;