import {CSS_Logo, React_Logo,JavaScript_Logo,Java_Logo,Python_Logo} from '../assets/codingLanguageIMG/logos.js'

import { useState } from 'react';
import JavaScriptModal from './modals/JavaScriptModal.jsx';


const TechnicalSkills = () => {

      const [javaScriptModalOpen, setJavaScriptModalOpen] = useState(false);

      const codingLanguages = ["Python", "Java", "JavaScript", "HTML", "CSS"];
      const codingLanguagesIMG = [CSS_Logo,JavaScript_Logo,Java_Logo,Python_Logo, React_Logo];
      const frameWorks = ["React", "TailwindCSS", "Spring/Spring Boot", "HTML", "CSS"];

      const buttonStyling = 'bg-[#1e1e1e] rounded-xl shadow-lg p-4 hover:scale-105 hover:cursor-pointer transition-transform duration-300'

      return(

            <div className='m-5'>
                  <h2 className='text-3xl font-bold'> Techincal Skills </h2>
                  <p className='text-sm text-zinc-300'> *hover to see the languages, framesworks, projects made with the language</p>

                  <div className='grid grid-cols-3 gap-4 w-[80%] mx-auto p-4'>
                        
                        {/* LANGUAGES */}

                        <button onClick={() => setJavaScriptModalOpen(true)}
                              className={buttonStyling}>

                              <h3 className='text-2xl text-center font-semibold mb-2'> JavaScript </h3>

                              <img src={JavaScript_Logo}
                              className='max-h-45 mx-auto mb-2'/>

                        </button>



                        <div className='bg-[#1e1e1e] rounded-xl shadow-lg p-4'>

                              <h3 className='text-2xl text-center font-semibold mb-2'> Java </h3>

                              <img src={Java_Logo}
                              className='max-h-45 mx-auto mb-2'/>
                              

                        </div>


                        <div className='bg-[#1e1e1e] rounded-xl shadow-lg p-4'>

                              <h3 className='text-2xl text-center font-semibold mb-2'> Python </h3>

                              <img src={Python_Logo}
                              className='max-h-45 mx-auto mb-2'/>
                              

                        </div>                        
                        
                  </div>

                  {javaScriptModalOpen && <JavaScriptModal onClose={() => setJavaScriptModalOpen(false)}/>}

            </div>
      )
}

export default TechnicalSkills;