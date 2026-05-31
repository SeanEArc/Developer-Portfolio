import Professional_Photo from '../assets/Professional-Photo.jpeg';

const AboutMe = () => {
    return (
        <div className="pr-4 pl-4 pt-25 md:w-[90%] sm:w-[90%] mx-auto">
            <div className="overflow-hidden rounded-md border border-[#646cff]/40 bg-bg-elevated shadow-md" role="status" aria-label="This page is currently being updated. Please come back again later">
                <div className="flex w-max animate-update-banner whitespace-nowrap py-3 text-sm font-semibold text-text-primary sm:text-base">
                    <span className="px-8 text-4xl">This page is currently being updated. Please come back again later</span>
                    <span className="px-8 text-4xl" aria-hidden="true">
                        This page is currently being updated. Please come back again later
                    </span>
                    <span className="px-8 text-4xl" aria-hidden="true">
                        This page is currently being updated. Please come back again later
                    </span>
                </div>
            </div>

            <h2 className="text-4xl font-bold m-2 text-text-primary">About Me</h2>

            <div className="grid grid-cols-[60%_40%]">
                <div>
                    <h3 className="text-2xl font-semibold m-2 pt-5 text-text-primary">Summary:</h3>

                    <p className="mb-4 text-text-muted">I'm a full-stack developer who acquired my technical skills through college, coding bootcamps, YouTube, and LaunchCode - a nonprofit coding bootcamp.</p>

                    <p className="mb-4 text-text-muted">
                        I enjoy learning new technologies, applying them in real-world scenarios, and building projects that anyone can use. My current full-stack stack includes Java with Spring Boot,
                        JavaScript with ReactJS and TailwindCSS, and PostgreSQL or MySQL for data persistence.
                    </p>

                    <p className="mb-4 text-text-muted">
                        I thrive in collaborative environments because they give me opportunities to learn more, share ideas, and challenge myself to improve on areas I am not familiar with.
                    </p>
                </div>

                <img src={Professional_Photo} alt="Photo of me" className="my-auto mx-auto ml-8 md:w-[50%] sm:10 border shadow rounded-full" />
            </div>

            <p className="mb-4 mx-auto w-[80%] text-text-muted">Additionally, I am currently in college to acquire a degree in Software Development and I enjoy playing indoor volleyball in my free time.</p>
        </div>
    );
};

export default AboutMe;
