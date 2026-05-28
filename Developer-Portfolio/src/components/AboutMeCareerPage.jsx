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
        <div className="bg-bg-surface pt-4">
            <div className="text-text-primary pb-5 shadow-md">
                <AboutMe />
                <hr className="m-5 w-[60%] mx-auto border-accent/20" />
            </div>

            <div id="mycareer" className="bg-bg-base pt-10">
                <MyCareer />
            </div>

            <div>
                <ContactMe />
            </div>
        </div>
    );
};

export default AboutMeCareerPage;
