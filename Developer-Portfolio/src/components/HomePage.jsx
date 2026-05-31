
import { useState, useRef, useEffect } from 'react';
import { IoMdArrowRoundForward, IoIosArrowDown } from 'react-icons/io';
import { CSS_Logo, React_Logo, JavaScript_Logo, Java_Logo, Python_Logo } from '../assets/codingLanguageIMG/logos.js';
import TechnicalSkills from './TechnicalSkills.jsx';
import ContactMe from './ContactMe.jsx';
import SocialLinks from './SocialLinks.jsx';
import { Link, useLocation } from 'react-router';
import StackedPhotos from './StackedPhotos';
import MyProjects from './MyProjects.jsx';

const codingLanguagesIMG = [CSS_Logo, JavaScript_Logo, Java_Logo, Python_Logo, React_Logo];

const HomePage = () => {
    const targetRef = useRef(null);

    const [visable, setVisable] = useState(false);
    const [index, setIndex] = useState(0);

    const scrollToSection = () => {
        targetRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const location = useLocation();

    useEffect(() => {
        setVisable(true);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % codingLanguagesIMG.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 25);
            }
        }
    }, [location]);

    return (
        <div className="bg-bg-base">
            <div className="bg-gradient-to-br from-bg-surface via-black to-bg-surface text-text-primary shadow-3xl min-h-screen flex flex-col">
                <div className={`grid md:grid-cols-[30%_70%] sm:grid-cols-1 w-[90%] mx-auto font-bold text-text-primary flex-1 items-center`}>
                    {/* Left column — stacked profile photos + social links */}
                    <div className="hidden md:flex flex-col items-center justify-center relative z-10">
                        <StackedPhotos className=""/>
                        <SocialLinks className="mt-10 text-text-primary" />
                    </div>

                    {/* Right column — text content */}
                    <div
                        className={`flex flex-col justify-center transition-opacity duration-1000 ease-in
                              ${visable ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <hr className="w-[20%] mx-auto mb-6 border-accent/30" />

                        <div className="flex items-center justify-center ml-10">
                            <h1 className="text-6xl font-bold text-center">I'm Sean</h1>
                            <img src={codingLanguagesIMG[index]} className="max-h-30 max-w-30 pl-5" />
                        </div>

                        <h1 className="m-1 p-2"></h1>

                        <p className="text-2xl mt-2 font-semibold text-center text-accent">Software Engineer | Full Stack Developer</p>

                        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10 mx-auto pl-4 pr-4 md:mr-20 md:ml-10">
                            <div className="grid-cols-1">
                                <h2 className="text-xl mt-8 text-text-primary">About Me</h2>
                                <p className="text-lg font-light mt-2 text-text-muted">
                                    I am a software engineer with a background in full-stack development. I enjoy building web applications, exploring new technologies, and applying my learning. I've
                                    learned various languages through LaunchCode, CS courses, and college. I thrive in collaborative environments and am always eager to learn and grow in the tech
                                    industry.
                                    <Link to="/aboutme" className="ml-2 inline-flex items-center text-accent hover:underline hover:cursor-pointer">
                                        Learn More <IoMdArrowRoundForward />
                                    </Link>
                                </p>
                            </div>

                            <div className="grid-cols-2">
                                <h2 className="text-xl md:mt-8 sm:mt-5 text-text-primary">Career</h2>
                                <p className="text-lg font-light mt-2 text-text-muted">
                                    I've worked in various industries, including tech, retail, food service, real estate, health care, and brokerage. My experience has taught me the importance of
                                    adaptability and the ability to continuously learn. I enjoy using technology to solve real-world problems and create fun projects.
                                    <Link to="/aboutme#mycareer" className="ml-2 inline-flex items-center text-accent hover:underline">
                                        Learn More <IoMdArrowRoundForward />
                                    </Link>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <div onClick={scrollToSection} className="flex justify-center animate-bounce mt-auto pb-4">
                    <IoIosArrowDown size="3em" className="text-text-muted hover:cursor-pointer hover:text-accent hover:scale-105 transition-colors duration-200" />
                </div>
            </div>

            <div ref={targetRef} className="text-text-primary transition-opacity duration-1000 ease-in">
                {/* TECHNICAL SKILLS */}
                <div className="bg-gradient-to-bl from-bg-surface via-black to-bg-surface overflow-hidden">
                    <TechnicalSkills />
                </div>

                {/* MY PROJECTS SECTION */}
                <div className="bg-gradient-to-br from-bg-surface via-black to-bg-surface overflow-hidden">
                    <MyProjects />
                </div>
            </div>

            <div id="contactme" className="bg-gradient-to-bl from-bg-surface via-black to-bg-surface overflow-hidden">
                <ContactMe />
            </div>

        </div>
    );
};

export default HomePage;
