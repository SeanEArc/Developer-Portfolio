import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';

const SOCIAL_HOVER = 'hover:text-accent transform hover:scale-110 transition duration-300';

const SocialLinks = ({ className = '' }) => (
    <div className={`flex justify-center items-center gap-10 ${className}`}>
        <a href="https://github.com/SeanEArc" target="_blank" rel="noopener noreferrer">
            <FaGithub size="3em" className={SOCIAL_HOVER} />
        </a>

        <a href="https://www.linkedin.com/in/sean-emmanuel-arcaya/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size="3em" className={SOCIAL_HOVER} />
        </a>

        <a href="https://www.instagram.com/sean.arcaya/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size="3em" className={SOCIAL_HOVER} />
        </a>
    </div>
);

export default SocialLinks;
