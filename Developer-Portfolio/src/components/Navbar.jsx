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
        'flex-auto w-full text-xl text-center font-bold pt-2 pb-2 hover:text-accent hover:underline hover:scale-110 transition-all duration-200 text-center justify-center items-center';

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
                hamburgerOpen ? 'bg-black/20' : 'bg-transparent'
            } ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
            <div className="flex md:justify-end-safe sm:justify-end-safe justify-center-safe w-full font-bold text-text-primary">
                <div>
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
                    className="p-2 mt-2 mr-4 rounded-full transition-colors duration-300 hover:text-accent hover:cursor-pointer"
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
