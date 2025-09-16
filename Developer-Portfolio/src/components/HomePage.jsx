import professionalPhoto from '../assets/Professional-Photo.jpeg';
import calorieCalculatorSS from '../assets/CalorieCalculatorScreenshot.png';
import { useState, useRef } from 'react';
import CalorieCounterModal from './CalorieCounterModal';
import Subject from '../assets/Subject.png';
import { IoMdArrowRoundForward, IoIosArrowDown } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";




const HomePage = () => {

      const codingLanguages = ["Python", "Java", "JavaScript", "HTML", "CSS"];
      const frameWorks = ["React", "TailwindCSS", "Spring/Spring Boot", "HTML", "CSS"];

      const [CalorieCounterModalOpen, setCalorieCounterModalOpen] = useState(false);


      return (

            <div className='bg-[#2d2d30]'>
                  
                  <div className="bg-[#1e1e1e] bg-no-repeat bg-contain bg-center text-neutral-200 shadow-3xl h-210"
                  style={{ 
                        backgroundImage: `url(${Subject})`,
                        backgroundPosition: '87% 25px',
                        backgroundSize: '26%',
                        }}>
                        
                        <div className="grid grid-cols-[60%_40%] w-full font-bold text-white">

                              <div className='grid-cols-1'>

                                    <hr className='w-[20%] mx-auto mt-15'/>

                                    <h1 className="text-6xl font-bold text-center mt-10">
                                          I'm Sean
                                    </h1>

                                    <h1 className="m-1 p-2">
                                    </h1>
                                    
                                    <p className="text-2xl mt-2 font-semibold text-center">
                                          Software Engineer | Full Stack Developer | Tech Enthusiast
                                    </p>

                                    <div className="grid grid-cols-2 gap-10 mx-auto p-4 mr-20 ml-10">

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

                        <div className='m-5'>
                              <h2 className='text-3xl font-bold'> Techincal Skills </h2>

                              <div className='grid grid-cols-2 gap-4 w-[40%] mx-auto p-4'>
                                    
                                    <div className=''>
                                          <h3 className='text-2xl text-center font-semibold'> Languages </h3>
                                          <ul>
                                                {codingLanguages.map((language, index) => (
                                                      <li key={index} className="text-l font-semibold m-1"> - {language}</li>))}
                                          </ul>

                                    </div>


                                    <div className=''>
                                          <h3 className='text-2xl text-center font-semibold'> Frameworks: </h3>
                                          <ul>
                                                {frameWorks.map((framework, index) => (
                                                      <li key={index} className="text-l font-semibold m-1"> - {framework}</li>))}
                                          </ul>
                                    </div>
                                    
                              </div>

                        </div>

                        {/* ABOUT ME SECTION*/}

                        <div className="p-4 w-[60%] mx-auto">
                              <h2 className="text-3xl font-bold m-2"> About Me </h2>

                              <p>
                                    I am a passionate software engineer with a background in full-stack development. I enjoy building scalable web applications and exploring new technologies. My expertise includes JavaScript, React, Node.js, and more. I thrive in collaborative environments and am always eager to learn and grow in the tech industry.
                              </p>
                              
                        </div>

                        
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




                  {CalorieCounterModalOpen && <CalorieCounterModal onClose={() => setCalorieCounterModalOpen(false)} />}


                  
            </div>
      )
};

export default HomePage;