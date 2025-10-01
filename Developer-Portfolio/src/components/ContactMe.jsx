import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';

const ContactMe = () => {
    return (
        <div className="bg-[#1e1e1e] pt-3 pb-6 shadow-lg">
            <h2 className="text-center text-3xl font-bold text-zinc-200 p-3">Contact Me:</h2>

            <div className="flex justify-center items-center mt-5 gap-10 text-zinc-200">
                <a href="https://github.com/SeanEArc" target="_blank" rel="noopener noreferrer">
                    <FaGithub size="3em" className="hover:text-gray-500 transform hover:scale-110 transition duration-300" />
                </a>

                <a href="https://www.linkedin.com/in/sean-emmanuel-arcaya/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size="3em" className="hover:text-gray-500 transform hover:scale-110 transition duration-300" />
                </a>

                <a href="https://www.instagram.com/sean.arcaya/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size="3em" className="hover:text-gray-500 transform hover:scale-110 transition duration-300" />
                </a>
            </div>
        </div>
    );
};

export default ContactMe;
