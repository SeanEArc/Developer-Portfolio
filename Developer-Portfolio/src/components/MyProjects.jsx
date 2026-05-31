import calorieCalculatorSS from '../assets/CalorieCalculatorScreenshot.png';
import sparqVOScreenshot from '../assets/MyProjectIMG/SparQVOSS.png';
import cloudInfraGif from '../assets/MyProjectIMG/TerraformGif.gif';
import bcxWebsiteGif from '../assets/MyProjectIMG/BCXMSGif2.gif';
import { useInView } from '../hooks/useInView.js';



const projects = [
      {
            title: 'BCXMS Cloud Infrastructure as Code Platform',
            description:
                  'A cloud infrastructure automation project focused on building and managing a complete Google Cloud organization using Infrastructure as Code principles. The project centralized cloud resource management, identity federation, project provisioning, permissions management, and service enablement through Terraform, establishing repeatable deployment processes while reducing manual cloud administration tasks.',
            features: [
                  'Automated Google Cloud project creation',
                  'Folder hierarchy and environment management',
                  'Billing account integration',
                  'Identity federation with Microsoft Entra ID',
                  'IAM role and permissions management',
                  'Remote Terraform state management',
                  'Development, staging, and production environment separation',
            ],
            technologies: 'Terraform, Google Cloud Platform (GCP), Cloud Identity, Microsoft Entra ID, IAM, Cloud Storage, Git',
            image: cloudInfraGif,
            links: [{label: "We are unable to provide a link for this project due to the sensitive nature of the work and the fact that it was developed for a private organization. However, I am happy to discuss the project in more detail during an interview or provide code samples upon request.", disableScale: true}],
      },
      {
            title: 'BCX Managed Services Corporate Website - Full-Stack Solo Development',
            description:
                  'A modern business website designed and developed to showcase BCX Managed Services\' services, solutions, and client offerings. The website serves as the company\'s public-facing platform and includes custom-built service pages, animated user experiences, legal and compliance documentation, lead generation forms, and analytics integrations.',
            features: [
                  'Responsive multi-page website',
                  'Interactive animations and navigation',
                  'Service and solutions catalog',
                  'CRM-integrated contact forms',
                  'Google Analytics integration',
                  'reCAPTCHA Enterprise protection',
                  'Accessibility and SEO optimization',
                  'CI/CD deployment workflows',
            ],
            technologies: 'React, Vite, Tailwind CSS, React Router, Framer Motion, Firebase Hosting, Python, FastAPI, Google Analytics, reCAPTCHA Enterprise, Google Cloud Platform',
            image: bcxWebsiteGif,
            links: [{label: "BCXMS Website", url: "https://bcxms.com/home"}],
      },
      {
            title: 'SparQ VO Client Portal - Agile Collaborative Project',
            description:
                  'A full-stack customer portal developed for BCX Managed Services that allows clients to view call analytics, billing information, reports, and account details through a secure web application. The platform integrates with multiple third-party services, including RingCentral and Insightly CRM, to collect, normalize, and display business data in a user-friendly dashboard.',
            features: [
                  'Secure user authentication and authorization',
                  'Third-party API integrations',
                  'Interactive reporting dashboards and analytics',
                  'Call log management and filtering',
                  'Billing and invoice tracking',
                  'Performance optimization through caching and session management',
                  'Responsive design for desktop and mobile devices',
            ],
            technologies: 'React, JavaScript, Tailwind CSS, Python, FastAPI, PostgreSQL, Firebase Authentication, RingCentral API, Insightly CRM API, Google Cloud Run, Docker',
            image: sparqVOScreenshot,
            links: [
                  { label: 'Client Portal', url: 'https://sparqvoportal.com/login' },
            ],
      },
      {
            title: 'Fitness Tracker Application - Full-Stack Capstone Project',
            description:
                  'A full-stack fitness tracking application designed to help users monitor calorie intake, macronutrients, and nutritional habits through an intuitive web interface. Users can log meals, track daily nutrition goals, review historical food consumption, and analyze dietary trends over time.',
            features: [
                  'User account and profile management',
                  'Food and meal logging',
                  'Calorie and macronutrient tracking',
                  'Historical nutrition reporting',
                  'CRUD operations for food entries',
                  'Responsive dashboard and user interface',
                  'RESTful API architecture',
                  'Persistent database storage',
            ],
            technologies: 'React, JavaScript, Tailwind CSS, Java, Spring Boot, PostgreSQL, JPA/Hibernate, REST APIs',
            image: calorieCalculatorSS,
            links: [
                  { label: 'Frontend Only Demo', url: 'https://thebestcalorietracker.netlify.app/' },
                  { label: 'GitHub', url: 'https://github.com/SeanEArc/Unit-2-Final-Project' },
            ],
      },
      {
            compact: true,
            title: 'Adventure Quest RPG',
            description:
                  'A text-based role-playing game developed in Python that allows players to explore a game world, collect items, complete quests, battle enemies, and interact with non-player characters. This was the first major project I built using Python.The project was designed with a modular architecture and emphasizes object-oriented programming principles, game state management, inventory systems, and persistent save functionality.',
            features: [
                  'Character creation and progression system',
                  'Inventory and equipment management',
                  'Quest and reward system',
                  'NPC interactions and dialogue',
                  'Save and load functionality',
                  'Item usage and character upgrades',
                  'Exploration-based gameplay mechanics',
            ],
            technologies: 'Python, Object-Oriented Programming, File Persistence',
            image: null,
            links: [],
      },
      {
            compact: true,
            title: 'Online Retail Analytics Dashboard',
            description:
                  'An interactive business intelligence dashboard created to analyze sales performance and customer purchasing trends for an online retail company. The project involved cleaning and transforming retail transaction data, creating custom product categories, and developing visualizations that provide actionable business insights.',
            features: [
                  'Product category sales analysis',
                  'Revenue and sales trend visualization',
                  'Top-performing product reporting',
                  'Country-based filtering and segmentation',
                  'Interactive dashboard design',
                  'Data cleaning and transformation',
            ],
            technologies: 'Tableau, Excel, Data Analysis',
            image: null,
            links: [],
      },
];

const ProjectCard = ({ project, index, compact }) => {
    const [cardRef, cardVisible] = useInView();

    return (
        <div
            ref={cardRef}
            className={`flex flex-col ${compact ? '' : `md:flex-row rounded-xl p-6 gap-8 mb-10 hover:border hover:scale-105 transition-transform duration-300 ease-in-out ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`} ${cardVisible ? 'animate-fade-slide-up' : 'opacity-0'}`}
        >
            <div className={`flex flex-col justify-center ${compact ? '' : 'md:w-1/2'}`}>
                <h3 className="text-2xl font-bold text-text-primary mb-3">{project.title}</h3>
                <p className="text-text-muted text-base mb-4">{project.description}</p>

                <p className="text-text-primary font-semibold mb-2 text-left">Key Features:</p>
                <ul className="list-disc list-inside text-text-muted text-base mb-4 space-y-1 text-left">
                    {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                    ))}
                </ul>

                <p className="text-text-muted text-sm mb-5 text-left">
                    <span className="text-text-primary font-semibold">Technologies: </span>
                    {project.technologies}
                </p>

                {project.links.length > 0 && (
                    <div className="flex flex-wrap gap-3 items-center justify-center">
                        {project.links.map((link) => (
                            <a
                                key={link.label}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`bg-accent text-white font-semibold rounded px-4 py-2 hover:opacity-90 transition-transform duration-300 ease-in-out border ${link.disableScale ? '' : 'hover:scale-110'}`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>

            {project.image && (
                <div className="md:w-1/2 flex items-center justify-center">
                    <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="rounded-xl shadow-md w-[75%] h-auto object-cover"
                    />
                </div>
            )}
        </div>
    );
};

const MyProjects = () => {
    const [headingRef, headingVisible] = useInView();
    const regularProjects = projects.filter((p) => !p.compact);
    const compactProjects = projects.filter((p) => p.compact);

    return (
        <div id="myprojects" className="w-[95%] mx-auto pt-10 pb-6">
            <h2
                ref={headingRef}
                className={`text-3xl font-bold text-text-primary ${headingVisible ? 'animate-fade-slide-up' : 'opacity-0'}`}
            >
                My Projects
            </h2>

            <hr
                className={`m-5 w-[60%] mx-auto border-accent/20 ${headingVisible ? 'animate-fade-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: '100ms' }}
            />

            <div className="mt-6">
                {regularProjects.map((project, index) => (
                    <ProjectCard key={project.title} project={project} index={index} compact={false} />
                ))}

                {compactProjects.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-xl p-6 hover:border mb-10">
                        {compactProjects.map((project) => (
                            <ProjectCard key={project.title} project={project} index={0} compact={true} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyProjects;
