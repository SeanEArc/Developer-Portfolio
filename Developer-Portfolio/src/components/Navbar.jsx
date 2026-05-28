import { GiHamburger } from 'react-icons/gi';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(true);

    const navLinkClass =
        'flex-auto w-full text-xl text-center font-bold pt-2 pb-2 hover:text-accent hover:scale-110 transition-all duration-200';

    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <div className="flex md:justify-end-safe sm:justify-end-safe justify-center-safe w-full font-bold text-text-primary">
                <div>
                    {hamburgerOpen && (
                        <div className="grid xs:grid-cols-1 sm:grid-cols-4 md:grid-cols-4 md:gap-10 sm:gap-2 pt-4 pr-2">
                            <Link to="/">
                                <p className={navLinkClass}>Home</p>
                            </Link>

                            <Link to="/aboutme">
                                <p className={navLinkClass}>About Me</p>
                            </Link>

                            <Link to="/aboutme#mycareer">
                                <p className={navLinkClass}>My Career</p>
                            </Link>

                            <Link to="/#contactme" className={navLinkClass}>
                                Contact Me
                            </Link>
                        </div>
                    )}
                </div>

                <button
                    className="p-2 mt-2 mr-4 rounded-full transition-colors duration-300 hover:text-accent hover:cursor-pointer"
                    onClick={() => setHamburgerOpen(prev => !prev)}
                    aria-label="Toggle menu"
                >
                    <GiHamburger size="3em" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
