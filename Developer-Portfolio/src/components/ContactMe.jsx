import SocialLinks from './SocialLinks';

const ContactMe = () => {
    return (
        <div className="bg-gradient-to-br from-bg-surface via-black to-bg-surface pt-3 pb-6 shadow-lg">
            <h2 className="text-center text-3xl font-bold text-text-primary p-3">Contact Me:</h2>
            <SocialLinks className="mt-5 text-text-primary" />
        </div>
    );
};

export default ContactMe;
