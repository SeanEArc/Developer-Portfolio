import {
  JavaScript_Logo, Java_Logo, Python_Logo, Tailwind_CSS_Logo, React_Logo, Vite_Logo, MySQL_Logo, PostGres_Logo, Spring_Logo, Postman_Logo} from "../../assets/codingLanguageIMG/logos.js";

const languages = [
            {
            name: "JavaScript",
            logo: JavaScript_Logo,
            description: `I have extensive experience using JavaScript as the foundation of my front-end and full-stack development projects. I’ve built dynamic, responsive web interfaces with React and TailwindCSS, creating components, stateful UIs, and smooth animations.

            Beyond the front end, I’ve also used JavaScript for integrating APIs, managing user interactions, and enhancing performance. In my projects, JavaScript powers everything from form validation and modals to interactive dashboards and portfolio showcases.

            By combining JavaScript with modern libraries like React, I am able to deliver clean, reusable components and intuitive user experiences while keeping performance and accessibility in mind.`,
            tools: [
                  { src: Tailwind_CSS_Logo, alt: "Tailwind CSS Logo", title: "TailwindCSS" },
                  { src: React_Logo, alt: "React Logo", title: "ReactJS" },
                  { src: Vite_Logo, alt: "Vite Logo", title: "Vite" },
            ],
      },
      {
            name: "Java",
            logo: Java_Logo,
            description: `I use Java primarily for back-end software engineering. My experience includes building RESTful APIs and microservices with Spring Boot, handling data persistence with JPA/Hibernate, and implementing business logic for user authentication, logging, and data processing. 
            
            I’m comfortable structuring multi-layer applications (controllers, services, repositories), writing unit/integration tests, and deploying Java services to a database such as PostGres or MySQL. This gives me a solid foundation for building scalable, maintainable back-end systems that integrate cleanly with front-end applications.`,
            tools: [
                  { src: MySQL_Logo, alt: "MySQL Database Logo", title: "MySQL Database" },
                  { src: Spring_Logo, alt: "Spring/Spring Boot Framework", title: "Spring/Spring Boot Framework" },
                  { src: PostGres_Logo, alt: "PostGres Database Logo", title: "PostGres Database" },
                  { src: Postman_Logo, alt: "Postman API Testing Tool", title: "Postman API Testing Tool" },
            ],
      },
      {
            name: "Python",
            logo: Python_Logo,
            description: `Python was the first programming language where I learned the foundations of coding. Today, I primarily use it to build scripts, quickly develop new ideas, and prototype early-stage projects. I also leverage Python for tasks such as parsing files, integrating with third-party APIs, and rapid prototyping. This versatility allows me to deliver reliable solutions for data handling, server-side logic, and fast concept development.`,
            tools: [],
      },
]

export default languages;