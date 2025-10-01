import { GiHamburger } from 'react-icons/gi';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(true);

    return (
        <div>
            <div className="flex md:justify-end-safe sm:justify-end-safe justify-center-safe w-full bg-[#1e1e1e] font-bold text-white">
                <div>
                    {hamburgerOpen && (
                        <div className="grid xs:grid-cols-1 sm:grid-cols-4 md:grid-cols-4 md:gap-10 sm:gap-2 pt-4 pr-2">
                            <Link to="/">
                                <p
                                    className="top-title-link flex-auto w-full text-xl text-center font-bold pt-2 pb-2 hover:scale-110
                                          "
                                >
                                    Home
                                </p>
                            </Link>

                            <Link to="/aboutme">
                                <p className="top-title-link flex-auto w-full text-xl text-center font-bold pt-2 pb-2 hover:scale-110">About Me</p>
                            </Link>

                            <Link to="/aboutme#mycareer">
                                <p className="top-title-link flex-auto w-full text-xl text-center font-bold pt-2 pb-2 hover:scale-110">My Career</p>
                            </Link>

                            <Link to="/#contactme" className="top-title-link flex-auto w-full text-xl text-center font-bold pt-2 pb-2 hover:scale-110">
                                Contact Me
                            </Link>
                        </div>
                    )}
                </div>

                <button
                    className="p-2 mt-2 mr-4 rounded-full transition-colors duration-300 hover:text-gray-400 hover:cursor-pointer"
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
