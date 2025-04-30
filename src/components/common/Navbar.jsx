import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/common/logo.png'

const Navbar = () => {

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

return (
    <nav
        className={`sticky top-0 z-30 h-26 px-6 flex justify-between items-center bg-white shadow-sm transition-transform duration-300 ${
            showNavbar ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
        <div className="text-xl font-semibold text-gray-800">
            <Link to="/">
                <img src={logo} alt="Logo" className="w-32 h-32" />
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
            <img className="h-6 w-6 text-gray-600 hover:text-[#FFB6C1]" fill="currentColor" viewBox="0 0 32 32">
                {/* WhatsApp Logo */}
            </img>
        </a>
    </nav>
);
};

export default Navbar;