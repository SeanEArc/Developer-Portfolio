import MyCareer from './MyCareer';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import { useLocation } from 'react-router';
import { useEffect } from 'react';

const AboutMeCareerPage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#mycareer') {
            const find = document.getElementById('mycareer');
            if (find) {
                find.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div className="bg-bg-base">
            <div className="bg-gradient-to-br from-bg-surface via-black to-bg-surface overflow-hidden">
                <AboutMe />
            </div>

            <div id="mycareer" className="bg-gradient-to-bl from-bg-surface via-black to-bg-surface overflow-hidden">
                <MyCareer />
            </div>

            <div className="bg-gradient-to-br from-bg-surface via-black to-bg-surface overflow-hidden">
                <ContactMe />
            </div>
        </div>
    );
};

export default AboutMeCareerPage;
