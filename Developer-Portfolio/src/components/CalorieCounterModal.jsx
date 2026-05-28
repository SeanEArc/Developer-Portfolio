import { useModalClose } from '../hooks/useModalClose';
import calorieCalculatorSS from '../assets/CalorieCalculatorScreenshot.png';
import { MdExitToApp } from 'react-icons/md';

const CalorieCounterModal = ({ onClose }) => {
    const { modalRef, closeModal } = useModalClose(onClose);

    return (
        <div ref={modalRef} onClick={closeModal} className="flex fixed inset-0 backdrop-blur-sm bg-bg-base/70 items-center justify-center z-50">
            <div className="bg-bg-elevated p-6 rounded-lg shadow-xl w-[60%] border border-black text-text-primary">
                <div className="relative">
                    <button className="absolute right-2 text-text-muted hover:text-accent hover:cursor-pointer" onClick={onClose}>
                        <MdExitToApp size="2em" />
                    </button>
                </div>

                <h2 className="text-4xl font-bold mb-4 text-center">Calorie Tracker Application</h2>
                <img src={calorieCalculatorSS} className="brightness-90 mx-auto rounded-lg shadow-lg w-[80%] h-[50%] object-cover" alt="Calorie Calculator Screenshot"></img>

                <p className="text-lg mt-4 font-semibold text-center text-text-muted">
                    This is a simple calorie tracker application that allows you to track your daily food intake. You can add food items along with their nutritional information. The app will
                    calculate your total calorie intake and Macro's logged. The app also contains additional links for further information on how to calculate your daily caloric intake.
                </p>

                <div className="flex justify-center m-2 mx-auto w-[40%] h-15">
                    <a
                        href="https://thebestcalorietracker.netlify.app/"
                        className="w-full h-full flex items-center justify-center text-center bg-accent text-bg-base font-semibold rounded hover:opacity-90 transition-opacity duration-300 mr-5"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Deployed Front-End Only
                    </a>

                    <a
                        href="https://github.com/SeanEArc/Unit-2-Final-Project"
                        className="w-full h-full flex items-center justify-center text-center bg-accent text-bg-base font-semibold rounded hover:opacity-90 transition-opacity duration-300 ml-5"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github Full-Stack Application
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CalorieCounterModal;
