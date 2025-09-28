import professionalPhoto from '../assets/Professional-Photo.jpeg';
import calorieCalculatorSS from '../assets/CalorieCalculatorScreenshot.png';
import { useState, useRef, useEffect } from 'react';
import CalorieCounterModal from './CalorieCounterModal';
import Subject from '../assets/Subject.png';
import { IoMdArrowRoundForward, IoIosArrowDown } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import {CSS_Logo, React_Logo,JavaScript_Logo,Java_Logo,Python_Logo} from '../assets/codingLanguageIMG/logos.js'
import AboutMe from './AboutMe.jsx';
import TechnicalSkills from './TechnicalSkills.jsx';
import MyCareer from './MyCareer.jsx';


const HomePage = () => {


      const codingLanguagesIMG = [CSS_Logo,JavaScript_Logo,Java_Logo,Python_Logo, React_Logo];

      const [CalorieCounterModalOpen, setCalorieCounterModalOpen] = useState(false);

      const [visable, setVisable] = useState(false);
      const [index, setIndex] = useState(0)
      

      useEffect(() => {
            setVisable(true);
      }, []);

      useEffect(() => {
            const interval = setInterval(() => {
                  setIndex((prev) => (prev + 1) % codingLanguagesIMG.length);
            }, 4000);
            return () => clearInterval(interval)
      }, []);
      


      return (

            <div className='bg-[#2d2d30]'>
                  
                  <div className={`bg-[#1e1e1e] bg-no-repeat bg-contain bg-center text-neutral-200 shadow-3xl h-210`}
                  style={{ 
                        backgroundImage: `url(${Subject})`,
                        backgroundPosition: '87% 25px',
                        backgroundSize: '26%',
                        }}>
                        
                        <div className={`grid grid-cols-[60%_40%] w-full font-bold text-white  `}>

                              <div className={`grid-cols-1 transition-opacity duration-2500 ease-in 
                              ${visable ? 'opacity-100' : 'opacity-0'}`}>

                                    <hr className='w-[20%] mx-auto mt-15'/>

                                    <div className='flex items-center justify-center mt-10 ml-10'>

                                          <h1 className="text-6xl font-bold text-center">
                                                I'm Sean
                                          </h1>

                                          <img
                                          src= {codingLanguagesIMG[index]}
                                          className='max-h-30 max-w-30 pl-5'/>
                                    </div>

                                    <h1 className="m-1 p-2">
                                    </h1>
                                    
                                    <p className="text-2xl mt-2 font-semibold text-center">
                                          Software Engineer | Full Stack Developer | Tech Enthusiast
                                    </p>

                                    <div className="grid grid-cols-2 gap-10 mx-auto pl-4 pr-4 mr-20 ml-10">

                                          <div className ="grid-cols-1">
                                                <h2 className='text-xl mt-35'> About Me! </h2>
                                                <p className='text-lg font-light mt-2'>
                                                      I am a software engineer with a background in full-stack development. I enjoy building web applications, exploring new technologies, and applying my learning. I've learned various languages through LaunchCode, CS courses, and college. I thrive in collaborative environments and am always eager to learn and grow in the tech industry.
                                                      <a className='ml-2 inline-flex items-center hover:underline hover:cursor-pointer'> Learn More <IoMdArrowRoundForward /> </a>
                                                </p>

                                          </div>

                                          <div className='grid-cols-2'>
                                                
                                                <h2 className='text-xl mt-35'> My Work </h2>
                                                <p className='text-lg font-light mt-2'>
                                                      I've worked in various industries, including retail, food service, real estate, health care, and brokerage. My experience has taught me the importance of adaptability and continuous learning. I enjoy using technology to solve real-world problems and improve user experiences.
                                                      <a className='ml-2 inline-flex items-center hover:underline'> Learn More <IoMdArrowRoundForward /> </a>
                                                </p>

                                          </div>

                                    </div>


                                    <div className='flex justify-center items-center mt-20 gap-10'>
                                          <a href="https://github.com/SeanEArc" target="_blank" rel="noopener noreferrer">
                                                <FaGithub size="3em" className="hover:text-gray-500 transform hover:scale-110 transition duration-300"/>
                                          </a>

                                          <a href="https://www.linkedin.com/in/sean-emmanuel-arcaya/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedin size="3em" className='hover:text-gray-500 transform hover:scale-110 transition duration-300' />
                                          </a> 

                                          <a href="https://www.instagram.com/sean.arcaya/" target="_blank" rel="noopener noreferrer"> 
                                                <FaInstagram size="3em" className='hover:text-gray-500 transform hover:scale-110 transition duration-300' />
                                          </a>
                                          
                                    </div>

                              </div>

                        </div>

                        <div className='flex justify-center animate-bounce mt-10'> 
                              <IoIosArrowDown size="3em" className='text-gray-600'/>
                        </div>

                  </div>

                  <hr className='w-full shadow-2xl'/>

                  <div className='bg-[#2d2d30] text-zinc-300 pt-4'>


                        {/* TECHNICAL SKILLS*/}

                        <TechnicalSkills />


                        
                        <AboutMe />


                        
                        {/* MY PROJECTS SECTION */}

                        <div className="p-4 mb-20">

                              <h2 className="text-3xl font-bold">Wanna see my projects? </h2>

                              <hr className='m-5 w-[60%] mx-auto'/>

                              <button
                              className=''
                              onClick={() => setCalorieCounterModalOpen(true)}>
                              
                                    <img src={calorieCalculatorSS}
                                    alt="Calorie Calculator Link"
                                    className="rounded-xl shadow-lg hover:opacity-80 hover:cursor-pointer transition-opacity duration-300 w-[500px] h-auto mx-auto"/>

                              </button>      

                        </div>

                  </div>

                  <div className='bg-[#1e1e1e] pt-5 pb-10 shadow-lg'>

                        <h2 className='text-center text-3xl font-bold text-zinc-200 p-6'>
                              Contact Me: 
                        </h2>

                              <div className='flex justify-center items-center mt-5 gap-10 text-zinc-200'>
                                    <a href="https://github.com/SeanEArc" target="_blank" rel="noopener noreferrer">
                                          <FaGithub size="3em" className="hover:text-gray-500 transform hover:scale-110 transition duration-300"/>
                                    </a>

                                    <a href="https://www.linkedin.com/in/sean-emmanuel-arcaya/" target="_blank" rel="noopener noreferrer">
                                          <FaLinkedin size="3em" className='hover:text-gray-500 transform hover:scale-110 transition duration-300' />
                                    </a> 

                                    <a href="https://www.instagram.com/sean.arcaya/" target="_blank" rel="noopener noreferrer"> 
                                          <FaInstagram size="3em" className='hover:text-gray-500 transform hover:scale-110 transition duration-300' />
                                    </a>
                                    
                              </div>



                  </div>

                  <MyCareer />




                  {CalorieCounterModalOpen && <CalorieCounterModal onClose={() => setCalorieCounterModalOpen(false)} />}


                  
            </div>
      )
};

export default HomePage;