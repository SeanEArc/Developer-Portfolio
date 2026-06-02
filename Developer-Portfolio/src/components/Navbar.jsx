import { GiHamburger } from 'react-icons/gi';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(true);
    const [menuVisible, setMenuVisible] = useState(true);
    const [visible, setVisible] = useState(false);
    const closeTimer = useRef(null);

    useEffect(() => {
        setVisible(true);
    }, []);

    const navLinkClass =
        'flex-auto w-full text-xl text-center font-bold uppercase pt-2 pb-2 hover:text-accent hover:underline hover:scale-110 transition-all duration-200 text-center justify-center items-center';

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const navLinks = [
        { label: 'Home', to: '/', onClick: scrollToTop },
        { label: 'Skills', to: '/#skills' },
        { label: 'Projects', to: '/#myprojects' },
        { label: 'About', to: '/aboutme', onClick: scrollToTop },
        { label: 'Career', to: '/aboutme#mycareer' },
        { label: 'Contact', to: '/#contactme' },
    ];

    const toggleMenu = () => {
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
        }

        if (hamburgerOpen) {
            setHamburgerOpen(false);
            closeTimer.current = setTimeout(() => {
                setMenuVisible(false);
            }, 260);
            return;
        }

        setMenuVisible(true);
        setHamburgerOpen(true);
    };

    useEffect(() => {
        return () => clearTimeout(closeTimer.current);
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 right-0 z-50 transition-[colors,opacity] duration-1000 ease-in ${
                hamburgerOpen ? 'bg-black/40' : 'bg-transparent'
            } ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
            <div className="relative flex min-h-16 w-full justify-center font-bold text-text-primary md:justify-end-safe">
                <div className="w-full px-16 md:w-auto md:px-0">
                    {menuVisible && (
                        <div
                            className={`grid xs:grid-cols-1 sm:grid-cols-5 md:grid-cols-6 md:gap-5 sm:gap-2 pt-4 pr-2 origin-right ${
                                hamburgerOpen ? 'animate-nav-slide-open' : 'animate-nav-slide-close'
                            }`}
                        >
                            {navLinks.map(link => (
                                <Link key={link.label} to={link.to} onClick={link.onClick}>
                                    <p className={navLinkClass}>{link.label}</p>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>

                <button
                    className="absolute right-4 top-2 rounded-full p-2 transition-colors duration-300 hover:cursor-pointer hover:text-accent md:static md:mt-2 md:mr-4"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={hamburgerOpen}
                >
                    <GiHamburger size="3em" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
