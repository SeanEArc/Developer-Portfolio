import { GiHamburger } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {

      const [hamburgerOpen, setHamburgerOpen] = useState(true);
      
      return (

            <div>
                  
                  <div className="flex justify-end-safe w-full bg-[#1e1e1e] font-bold text-white">
                        
                        <div> 


                              {hamburgerOpen && (
                              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4">
                                    <p className="top-title-link flex-auto w-full text-xl text-center font-bold pt-2 pb-2"> 
                                          Home
                                    </p>

                                    <p className="top-title-link flex-auto w-full text-xl text-center font-bold pt-2 pb-2"> 
                                          About Me
                                    </p>

                                    <p className="top-title-link flex-auto w-full text-xl text-center font-bold pt-2 pb-2"> 
                                          My Career
                                    </p>

                                    <p className="top-title-link flex-auto w-full text-xl text-center font-bold pt-2 pb-2"> 
                                          Resume
                                    </p>

                                    <p className="top-title-link flex-auto w-full text-xl text-center font-bold pt-2 pb-2"> 
                                          Socials + Contact
                                    </p>

                              </div>)}
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
      )
}

export default Navbar;