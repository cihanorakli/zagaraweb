import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
    const { language, toggleLanguage, t } = useLanguage();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Determine navbar class
    // Home + Top = Transparent (Difference mode)
    // Home + Scrolled = Glass
    // Other Pages = Glass
    const navbarClass = isHome && !isScrolled ? 'navbar-transparent' : 'navbar-glass';

    return (
        <nav className={`navbar ${navbarClass}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    {t('navbar.brand')}
                </Link>

                <div className="navbar-links">
                    <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        Home
                    </NavLink>
                    <NavLink to="/collections" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        {t('navbar.collections')}
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        {t('navbar.atelier')}
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        {t('navbar.contact')}
                    </NavLink>
                    <button onClick={toggleLanguage} className="lang-toggle">
                        {language === 'en' ? 'TR' : 'EN'}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
