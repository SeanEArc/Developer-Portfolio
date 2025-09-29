
import { useState } from 'react';
import languageInfo from './modals/languageInfo.js';
import LanguageModal from './modals/LanguageModal.jsx';


const TechnicalSkills = () => {


      const [modalIndex, setModalIndex] = useState(null);

      const buttonStyling = 'bg-[#1e1e1e] rounded-xl shadow-lg p-4 hover:scale-105 hover:cursor-pointer transition-transform duration-300'

      return(

            <div className='m-5'>
                  <h2 className='text-3xl font-bold'> Techincal Skills </h2>
                  <p className='text-sm text-zinc-300'> *click to see the languages, framesworks, projects made with the language</p>

                  <div className='grid grid-cols-3 gap-4 w-[80%] mx-auto p-4'>
                        
                        {/* LANGUAGE BUTTONS */}

                        {languageInfo.map((language, index) => (

                              <button
                              key={language.name}
                              onClick={() => setModalIndex(index)}
                              className={buttonStyling}>

                                    <h3 className='text-2xl text-center font-semihbold mb-2'>
                                          {language.name}
                                    </h3>

                                    <img
                                    src={language.logo}
                                    alt={language.name + " Logo"}
                                    className='max-h-45 mx-auto mb-2'/>

                              </button>
                        ))}
                        
                  </div>

                  {modalIndex !== null && (
                        <LanguageModal
                        
                        onClose={() => setModalIndex(null)}

                        language={languageInfo[modalIndex]}

                        onPrev={() => setModalIndex((index) => (index - 1 + languageInfo.length) % languageInfo.length)}

                        onNext={() => setModalIndex((index) => (index + 1) % languageInfo.length)}
                        />                  
                  )}

            </div>
      )
}

export default TechnicalSkills;