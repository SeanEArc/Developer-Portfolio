import { useRef } from 'react';
import { JavaScript_Logo, Tailwind_CSS_Logo, React_Logo, Vite_Logo} from '../../assets/codingLanguageIMG/logos';
import { RiArrowLeftWideLine, RiArrowRightWideLine  } from "react-icons/ri";


const JavaScriptModal = ({onClose}) => {

      const modalRef = useRef();

      const closeModal = (event) => {
            if(modalRef.current === event.target)
            onClose()
      }

      return (

      <div
      ref={modalRef}
      onClick={closeModal}
      className="flex fixed inset-0 backdrop-blur-3xl items-center justify-center z-50">

            <div className="grid grid-cols-[5%_90%_5%] p-6 rounded-lg shadow-xl w-[75%] border-black text-zinc-100">


                  <button className='flex items-center justify-center'>

                        <RiArrowLeftWideLine size="3em"
                        className="cursor-pointer hover:scale-110 transition-transform duration-200 "/>
                  </button>
 
                  <div>
                        <div className="flex items-center justify-center gap-4 mb-4">
                              <img
                              src={JavaScript_Logo}
                              className="brightness-90 rounded-lg w-[10%] h-[10%] object-cover"
                              alt="JavaScript Logo"/>

                              <h3 className="text-5xl font-bold text-center">JavaScript</h3>

                              <img
                              src={JavaScript_Logo}
                              className="brightness-90 rounded-lg w-[10%] h-[10%] object-cover"
                              alt="JavaScript Logo"/>

                              <hr className='text-zinc-300'/>

                        </div>


                        <div className='w-[75%] mx-auto mb-6'>
                              <p>
                                    I have extensive experience using JavaScript as the foundation of my front-end and full-stack development projects. I’ve built dynamic, responsive web interfaces with React and TailwindCSS, creating components, stateful UIs, and smooth animations.

                                    Beyond the front end, I’ve also used JavaScript for integrating APIs, managing user interactions, and enhancing performance. In my projects, JavaScript powers everything from form validation and modals to interactive dashboards and portfolio showcases.

                                    By combining JavaScript with modern libraries like React, I am able to deliver clean, reusable components and intuitive user experiences while keeping performance and accessibility in mind.
                                    
                              </p>
                        </div>

                        
                        
                        
                        <h3 className="text-4xl font-bold text-center"> Libraries | Frameworks | Tools </h3>

                        <div className='flex justify-center items-center mt-5 gap-10 text-zinc-200'>

                              <img src={Tailwind_CSS_Logo} className="inline-block max-w-[10%] h-auto mr-4"
                              alt="Tailwind CSS Logo"
                              title='TailwaindCSS Framework for Styling'/>
                              

                              <img src={React_Logo} className="inline-block max-w-[10%] h-auto"
                              alt="React Logo"
                              title='ReactJS Library for using JavaScript and HTML all in one place'/>

                              <img src={Vite_Logo} className="inline-block max-w-[10%] h-auto"
                              alt="Vite Logo"
                              title='Vite for Front-End Development'/>                              

                        </div>




                  </div>


                  <button className='flex items-center justify-center'>

                        <RiArrowRightWideLine size="3em"
                        className="cursor-pointer hover:scale-110 transition-transform duration-200"/>

                  </button>

            
            </div>
      </div>
      );




}

export default JavaScriptModal;