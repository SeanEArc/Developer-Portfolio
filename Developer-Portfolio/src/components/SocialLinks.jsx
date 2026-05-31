import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';

const SOCIAL_HOVER = 'hover:text-accent transform hover:scale-110 transition duration-300';

const SocialLinks = ({ className = '' }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <div
            className={`flex justify-center items-center gap-10 transition-opacity duration-2000 ease-in ${
                visible ? 'opacity-100' : 'opacity-0'
            } ${className}`}
        >
            <a href="https://github.com/SeanEArc" target="_blank" rel="noopener noreferrer">
                <FaGithub size="3em" className={SOCIAL_HOVER} />
            </a>

            <a href="https://www.linkedin.com/in/seanarcaya/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size="3em" className={SOCIAL_HOVER} />
            </a>

            <a href="https://www.instagram.com/sean.arcaya/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size="3em" className={SOCIAL_HOVER} />
            </a>
        </div>
    );
};

export default SocialLinks;
