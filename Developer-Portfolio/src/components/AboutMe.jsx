import Professional_Photo from '../assets/Professional-Photo.jpeg';
import { useInView } from '../hooks/useInView.js';

const AboutMe = () => {
    const [headingRef, headingVisible] = useInView();
    const [contentRef, contentVisible] = useInView();

    return (
        <div className="w-[85%] mx-auto pt-25 pb-6">

            <h2
                ref={headingRef}
                className={`text-3xl font-bold uppercase tracking-widest text-text-primary ${headingVisible ? 'animate-fade-slide-up' : 'opacity-0'}`}
            >
                About Me
            </h2>
            <div
                className={`my-5 h-[2px] w-[60%] mx-auto bg-gradient-to-r from-text-muted/10 via-text-muted/35 to-text-muted/10 ${headingVisible ? 'animate-fade-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: '100ms' }}
            />

            <div
                ref={contentRef}
                className={`grid grid-cols-1 md:grid-cols-[60%_40%] ${contentVisible ? 'animate-fade-slide-up' : 'opacity-0'}`}
            >
                <img src={Professional_Photo} alt="Photo of me" className="block md:hidden my-6 mx-auto w-40 border shadow rounded-full" />
                <div>
                    <h3 className="text-2xl font-semibold uppercase tracking-widest m-2 pt-5 text-text-primary">Summary:</h3>

                    <p className="mb-4 text-text-muted">
                        Hello! My name is Sean Arcaya, and I am a Full-Stack Software Developer with a passion for
                        building applications that solve real-world problems and create meaningful experiences for
                        users. My journey into software development began through a combination of college coursework, coding
                        bootcamps, self-directed learning, and hands-on professional experience. Since then, I have
                        worked on a variety of projects ranging from web applications and cloud infrastructure to
                        business automation tools and AI-powered solutions.
                    </p>


                    <p className="mb-4 text-text-muted">
                        I enjoy working across the entire development lifecycle, from designing responsive user
                        interfaces with React and Tailwind CSS to building scalable backend services with Java, Spring
                        Boot, Python, and FastAPI. I also have experience deploying and managing cloud-native
                        applications using Google Cloud Platform, Docker, CI/CD pipelines, and Terraform.
                    </p>

                    <p className="mb-4 text-text-muted">
                        What excites me most about software development is the opportunity to continuously learn, solve
                        challenging problems, and turn ideas into practical solutions. Whether I am collaborating with a
                        team, integrating new technologies, or building personal projects, I am always looking for ways
                        to improve my skills and deliver high-quality software.
                    </p>

                    <p className="mb-4 text-text-muted">
                        When I'm not coding, you'll usually find me hiking, working on personal
                        development projects, playing competitive volleyball, or spending time with my Tuxedo cat, Nix and Olde English Bulldog, Loki.
                    </p>
                </div>

                <img src={Professional_Photo} alt="Photo of me" className="hidden md:block my-auto mx-auto ml-8 md:w-[50%] border shadow rounded-full" />
            </div>

        </div>
    );
};

export default AboutMe;
