import { useRef } from 'react';
import calorieCalculatorSS from '../assets/CalorieCalculatorScreenshot.png';
import { MdExitToApp } from "react-icons/md";



const CalorieCounterModal = ({ onClose }) => {

	const modalRef = useRef();

	// Closes AddFoodModal if clicked outside of the AddFoodModal
	const closeModal = (event) => {
		if(modalRef.current === event.target)
		onClose()
	}
		
	return (
		// modalRef is now equal to the AddFoodModal Backdrop
	<div ref={modalRef} 
	onClick={closeModal}
	className="flex fixed inset-0 backdrop-blur-sm items-center justify-center z-50">
			
		<div className="bg-[#252526] p-6 rounded-lg shadow-xl w-[60%] border border-black text-zinc-100">

                  <div className='relative'>
                        <button 
                        className='absolute right-2 text-gray-600 hover:text-black hover:cursor-pointer' 
                        onClick={onClose}>
                              <MdExitToApp  size='2em' />
                        </button>
                  </div>

                  <h2 className="text-4xl font-bold mb-4 text-center">Calorie Tracker Application</h2>
                  <img src={calorieCalculatorSS}
                  className='brightness-90 mx-auto rounded-lg shadow-lg w-[80%] h-[50%] object-cover'
                  alt="Calorie Calculator Screenshot">
                  </img>

                  <p className="text-lg mt-4 font-semibold text-center">
                        This is a simple calorie tracker application that allows you to track your daily food intake.
                        You can add food items along with their nutritional information. The app will calculate
                        your total calorie intake and Macro's logged. The app also contains additional links for further
                        information on how to calculate your daily caloric intake.
                  </p>

                  <div className='flex justify-center m-2 mx-auto w-[40%] h-15'>

                        <a href="https://thebestcalorietracker.netlify.app/" 
                        className='w-full h-full flex items-center justify-center text-center bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300 mr-5' 
                        target="_blank" rel="noopener noreferrer">
                        Deplayed Front-End Only
                        </a>

                        <a href="https://github.com/SeanEArc/Unit-2-Final-Project" 
                        className='w-full h-full flex items-center justify-center text-center bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300 ml-5' 
                        target="_blank" rel="noopener noreferrer">
                        Github Full-Stack Application
                        </a>

                        

                  </div>

		</div>
	</div>
	)
}

export default CalorieCounterModal;