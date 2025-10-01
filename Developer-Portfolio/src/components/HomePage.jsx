import calorieCalculatorSS from '../assets/CalorieCalculatorScreenshot.png';
import { useState, useRef, useEffect } from 'react';
import CalorieCounterModal from './CalorieCounterModal';
import Subject from '../assets/Subject.png';
import { IoMdArrowRoundForward, IoIosArrowDown } from 'react-icons/io';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import {
    CSS_Logo,
    React_Logo,
    JavaScript_Logo,
    Java_Logo,
    Python_Logo,
} from '../assets/codingLanguageIMG/logos.js';
import TechnicalSkills from './TechnicalSkills.jsx';
import ContactMe from './ContactMe.jsx';
import { Link, useLocation } from 'react-router';
import ProfessionalPhoto from '../assets/Professional-Photo.jpeg'

const HomePage = () => {
    const codingLanguagesIMG = [
        CSS_Logo,
        JavaScript_Logo,
        Java_Logo,
        Python_Logo,
        React_Logo,
    ];

    const [CalorieCounterModalOpen, setCalorieCounterModalOpen] =
        useState(false);

    const targetRef = useRef(null);

    const [visable, setVisable] = useState(false);
    const [techSectVisable, setTechSectVisable] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTechSectVisable(true);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }
        return () => {
            if (targetRef.current) observer.unobserve(targetRef.current);
        };
    }, []);

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
        <div className="bg-[#2d2d30]">
            <div
                  className="bg-[#1e1e1e] bg-no-repeat bg-center text-neutral-200 shadow-3xl h-auto md:h-[100%] xs:rounded-full xs:border-4 xs:border-white"
                  style={{
                        backgroundImage: window.innerWidth >= 768 ? `url(${Subject})` : `url(${ProfessionalPhoto})`,
                        backgroundPosition: window.innerWidth >= 768 ? `87% 25px` : `49% 320px`,
                        backgroundSize: window.innerWidth >= 768 ? '26%' : '35%'
                  }}
            >
                <div
                    className={`grid md:grid-cols-[60%_40%] sm:grid-cols-1 w-full font-bold text-white  `}
                >
                    <div
                        className={`grid-cols-1 transition-opacity duration-1000 ease-in 
                              ${visable ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <hr className="w-[20%] mx-auto mt-15" />

                        <div className="flex items-center justify-center mt-10 ml-10">
                            <h1 className="text-6xl font-bold text-center">
                                I'm Sean
                            </h1>

                            <img
                                src={codingLanguagesIMG[index]}
                                className="max-h-30 max-w-30 pl-5"
                            />
                        </div>

                        <h1 className="m-1 p-2"></h1>

                        <p className="text-2xl mt-2 font-semibold text-center">
                            Software Engineer | Full Stack Developer | Tech
                            Enthusiast
                        </p>

                        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10 mx-auto pl-4 pr-4 md:mr-20 md:ml-10">

                            <div className="grid-cols-1">
                                <h2 className="text-xl mt-35"> About Me! </h2>
                                <p className="text-lg font-light mt-2">
                                    I am a software engineer with a background
                                    in full-stack development. I enjoy building
                                    web applications, exploring new
                                    technologies, and applying my learning. I've
                                    learned various languages through
                                    LaunchCode, CS courses, and college. I
                                    thrive in collaborative environments and am
                                    always eager to learn and grow in the tech
                                    industry.
                                    <Link
                                        to="/aboutme"
                                        className="ml-2 inline-flex items-center hover:underline hover:cursor-pointer"
                                    >
                                        {' '}
                                        Learn More{' '}
                                        <IoMdArrowRoundForward />{' '}
                                    </Link>
                                </p>
                            </div>

                            <div className="grid-cols-2">
                                <h2 className="text-xl md:mt-35 sm:mt-5"> My Work </h2>
                                <p className="text-lg font-light mt-2">
                                    I've worked in various industries, including
                                    retail, food service, real estate, health
                                    care, and brokerage. My experience has
                                    taught me the importance of adaptability and
                                    the ability to continuously learn. I enjoy
                                    using technology to solve real-world
                                    problems and create fun projects.
                                    <Link
                                        to="/aboutme#mycareer"
                                        className="ml-2 inline-flex items-center hover:underline"
                                    >
                                        {' '}
                                        Learn More{' '}
                                        <IoMdArrowRoundForward />{' '}
                                    </Link>
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center items-center mt-20 gap-10">
                            <a
                                href="https://github.com/SeanEArc"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub
                                    size="3em"
                                    className="hover:text-gray-500 transform hover:scale-110 transition duration-300"
                                />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/sean-emmanuel-arcaya/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin
                                    size="3em"
                                    className="hover:text-gray-500 transform hover:scale-110 transition duration-300"
                                />
                            </a>

                            <a
                                href="https://www.instagram.com/sean.arcaya/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram
                                    size="3em"
                                    className="hover:text-gray-500 transform hover:scale-110 transition duration-300"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div
                    onClick={scrollToSection}
                    className="flex justify-center animate-bounce mt-10"
                >
                    <IoIosArrowDown
                        size="3em"
                        className="text-gray-600 hover:cursor-pointer hover:scale-105"
                    />
                </div>
            </div>

            <hr className="w-full shadow-2xl" />

            <div
                ref={targetRef}
                className={`bg-[#2d2d30] text-zinc-300 pt-4 
                  transition-opacity duration-1000 ease-in `}
            >
                {/* TECHNICAL SKILLS*/}
                <div
                    className={`transition-opacity duration-500 ease-in ${techSectVisable ? 'opacity-100' : 'opacity-0'}`}
                >
                    <TechnicalSkills />
                </div>

                {/* MY PROJECTS SECTION */}

                <div
                    className={`p-4 mb-20 transition-opacity duration-1500 ease-in ${techSectVisable ? 'opacity-100' : 'opacity-0'}`}
                >
                    <h2 className="text-3xl font-bold pt-3 mt-3">
                        Wanna see my projects?{' '}
                    </h2>

                    <hr className="m-5 w-[60%] mx-auto" />

                    <button
                        className="mt-5"
                        onClick={() => setCalorieCounterModalOpen(true)}
                    >
                        <img
                            src={calorieCalculatorSS}
                            alt="Calorie Calculator Link"
                            className="rounded-xl shadow-lg hover:opacity-80 hover:cursor-pointer transition-opacity duration-300 w-[500px] h-auto mx-auto"
                        />
                    </button>
                </div>
            </div>

            <div id="contactme">
                <ContactMe />
            </div>

            {CalorieCounterModalOpen && (
                <CalorieCounterModal
                    onClose={() => setCalorieCounterModalOpen(false)}
                />
            )}
        </div>
    );
};

export default HomePage;
