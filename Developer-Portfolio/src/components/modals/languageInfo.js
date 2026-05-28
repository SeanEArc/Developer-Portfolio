import {
    JavaScript_Logo,
    Java_Logo,
    Python_Logo,
    Tailwind_CSS_Logo,
    React_Logo,
    Vite_Logo,
    MySQL_Logo,
    PostGres_Logo,
    Spring_Logo,
    Postman_Logo,
    FastAPI_Logo,
    SQLAlchemy_Logo,
    Pydantic_Logo,
    Uvicorn_Logo,
    GCP_Logo,
    Firebase_Logo,
    Terraform_Logo,
    Google_Identity_Logo,
    Docker_Logo,
    GitHub_Actions_Logo,
    GitHub_Logo,
    GCP_SDK_Logo,
    MongoDB_Logo,
} from '../../assets/codingLanguageIMG/logos.js';

const languages = [
    {
        name: 'JavaScript',
        logo: JavaScript_Logo,
        category: 'Programming Languages',
        description: `I have extensive experience using JavaScript as the foundation of my front-end and full-stack development projects. I've built dynamic, responsive web interfaces with React and TailwindCSS, creating components, stateful UIs, and smooth animations.

            Beyond the front end, I've also used JavaScript for integrating APIs, managing user interactions, and enhancing performance. In my projects, JavaScript powers everything from form validation and modals to interactive dashboards and portfolio showcases.

            By combining JavaScript with modern libraries like React, I am able to deliver clean, reusable components and intuitive user experiences while keeping performance and accessibility in mind.`,
        tools: [
            {
                src: Tailwind_CSS_Logo,
                alt: 'Tailwind CSS Logo',
                title: 'TailwindCSS',
            },
            { src: React_Logo, alt: 'React Logo', title: 'ReactJS' },
            { src: Vite_Logo, alt: 'Vite Logo', title: 'Vite' },
        ],
    },
    {
        name: 'Java',
        logo: Java_Logo,
        category: 'Programming Languages',
        description: `I use Java primarily for back-end software engineering. My experience includes building RESTful APIs and microservices with Spring Boot, handling data persistence with JPA/Hibernate, and implementing business logic for user authentication, logging, and data processing.

            I'm comfortable structuring multi-layer applications (controllers, services, repositories), writing unit/integration tests, and deploying Java services to a database such as PostGres or MySQL. This gives me a solid foundation for building scalable, maintainable back-end systems that integrate cleanly with front-end applications.`,
        tools: [
            {
                src: MySQL_Logo,
                alt: 'MySQL Database Logo',
                title: 'MySQL Database',
            },
            {
                src: Spring_Logo,
                alt: 'Spring/Spring Boot Framework',
                title: 'Spring/Spring Boot Framework',
            },
            {
                src: PostGres_Logo,
                alt: 'PostGres Database Logo',
                title: 'PostGres Database',
            },
            {
                src: Postman_Logo,
                alt: 'Postman API Testing Tool',
                title: 'Postman API Testing Tool',
            },
        ],
    },
    {
        name: 'Python',
        logo: Python_Logo,
        category: 'Programming Languages',
        description: `Python was the first programming language where I learned the foundations of software development, and it remains one of my primary tools for backend engineering, scripting, and rapid prototyping. I have used Python to build RESTful APIs with FastAPI, integrate third-party services such as Insightly CRM and RingCentral, and develop cloud-native applications deployed on Google Cloud Run.

        My experience also includes working with JWT authentication, environment configuration management, database integration, and Dockerized deployments. I frequently use Python for automating workflows, parsing and transforming data, building backend services, and quickly developing proof-of-concept applications.

        By combining Python with modern frameworks and cloud tooling, I am able to create scalable backend systems, API integrations, and rapid development solutions while maintaining clean and maintainable codebases.`,
        tools: [
            {
                src: FastAPI_Logo,
                alt: 'FastAPI Framework Logo',
                title: 'FastAPI',
            },
            {
                src: SQLAlchemy_Logo,
                alt: 'SQLAlchemy ORM Logo',
                title: 'SQLAlchemy',
            },
            {
                src: Pydantic_Logo,
                alt: 'Pydantic Validation Library Logo',
                title: 'Pydantic',
            },
            {
                src: Uvicorn_Logo,
                alt: 'Uvicorn ASGI Server Logo',
                title: 'Uvicorn',
            },
            {
                src: Postman_Logo,
                alt: 'Postman API Testing Tool',
                title: 'Postman API Testing Tool',
            },
        ],
    },
    {
        name: 'Google Cloud Platform',
        logo: GCP_Logo,
        category: 'Cloud & Infrastructure',
        description: `I have hands-on experience architecting and deploying production workloads across Google Cloud Platform. I've designed multi-environment infrastructures (Dev, Staging, Production) using GCP Organizations, Folders, and Projects, managing IAM policies at the org and folder level for governance and least-privilege access.

        On the compute and networking side, I've deployed containerized services with Cloud Run, managed relational data with Cloud SQL, stored and served assets via Cloud Storage, and used Pub/Sub with Cloud Scheduler for event-driven and scheduled workflows. I've built and automated container pipelines through Cloud Build and Artifact Registry, and used Secret Manager for secure credential management.

        I regularly use Cloud Monitoring and Cloud Logging for observability, and have experience enabling and managing GCP service APIs, configuring custom domain mappings, and automating cloud governance workflows.`,
        tools: [
            { type: 'text', title: 'Cloud Run' },
            { type: 'text', title: 'Cloud SQL' },
            { type: 'text', title: 'Cloud Storage' },
            { type: 'text', title: 'Cloud Build' },
            { type: 'text', title: 'Artifact Registry' },
            { type: 'text', title: 'Secret Manager' },
            { type: 'text', title: 'Cloud Pub/Sub' },
            { type: 'text', title: 'Cloud Scheduler' },
            { type: 'text', title: 'Cloud Monitoring' },
            { type: 'text', title: 'Cloud Logging' },
            { type: 'text', title: 'App Engine' },
            { type: 'text', title: 'Cloud Datastore' },
        ],
    },
    {
        name: 'Firebase',
        logo: Firebase_Logo,
        category: 'Cloud & Infrastructure',
        description: `I have used the Firebase ecosystem for building and hosting full-stack web applications. Firebase Hosting allows me to deploy web apps globally with a CDN-backed infrastructure and custom domain support, making deployments fast and reliable.

        I've implemented Firebase Authentication to manage user sign-in flows, leveraging its support for email/password, OAuth providers, and integration with Google Identity Platform. I've also written Firebase Rules to control read/write access to Firestore and Realtime Database, ensuring secure data access patterns.

        Firebase integrates naturally with other GCP services in my workflows, allowing me to combine serverless hosting and auth with backend services running on Cloud Run.`,
        tools: [
            { type: 'text', title: 'Firebase Hosting' },
            { type: 'text', title: 'Firebase Authentication' },
            { type: 'text', title: 'Firebase Rules' },
        ],
    },
    {
        name: 'Terraform',
        logo: Terraform_Logo,
        category: 'Cloud & Infrastructure',
        description: `I use Terraform as my primary Infrastructure as Code tool for provisioning and managing cloud resources on GCP. I write modular Terraform configurations to create and manage GCP Projects, Cloud Run services, Cloud SQL instances, IAM bindings, APIs, Secret Manager secrets, and more.

        I've implemented remote state management using GCP Cloud Storage buckets as Terraform backends, which enables team collaboration and state locking. My workflows include state imports for onboarding existing resources, multi-environment deployments structured across Dev, Staging, and Production workspaces, and cloud governance automation to enforce consistent resource standards.

        Terraform has allowed me to treat infrastructure as versioned, reviewable code — making environment provisioning repeatable, auditable, and significantly faster.`,
        tools: [
            { type: 'text', title: 'Infrastructure as Code (IaC)' },
            { type: 'text', title: 'Remote State (GCS Backend)' },
            { type: 'text', title: 'GCP Provider' },
            { type: 'text', title: 'Multi-env (Dev/Staging/Prod)' },
            { type: 'text', title: 'State Imports' },
            { type: 'text', title: 'Cloud Governance Automation' },
        ],
    },
    {
        name: 'Identity & Security',
        logo: Google_Identity_Logo,
        category: 'Cloud & Infrastructure',
        description: `Security and identity management are core to the production systems I build. I've configured GCP Workforce Identity Federation with Microsoft Entra ID (Azure AD) as the identity provider, enabling enterprise SSO so users authenticate through their existing organizational credentials rather than managing separate GCP accounts. This involved setting up OIDC provider trust, attribute mappings, and workforce pools in GCP to accept Entra-issued tokens.

        I design and enforce Role-Based Access Control (RBAC) policies using GCP IAM, applying the principle of least privilege across Organizations, Folders, and Projects. I've worked with JWT-based authentication for API security, implemented reCAPTCHA Enterprise for bot protection, and used Secret Manager to keep credentials out of source code.

        I've also configured GCP Organization policies and folder-level IAM bindings to govern access at scale, ensuring consistent security posture across multi-project environments.`,
        tools: [
            { type: 'text', title: 'Google Identity Platform' },
            { type: 'text', title: 'Workforce Identity Federation' },
            { type: 'text', title: 'Microsoft Entra ID (Azure AD)' },
            { type: 'text', title: 'JWT Authentication' },
            { type: 'text', title: 'Role-Based Access Control (RBAC)' },
            { type: 'text', title: 'IAM Policies' },
            { type: 'text', title: 'GCP Org/Folder/Project Hierarchy' },
        ],
    },
    {
        name: 'Docker',
        logo: Docker_Logo,
        category: 'DevOps & CI/CD',
        description: `Docker is central to how I build and deploy backend services. I write Dockerfiles to containerize Python and other language backends, ensuring consistent environments across local development, CI pipelines, and production cloud deployments.

        I build and tag Docker images, push them to Google Artifact Registry, and deploy them as serverless containers on Cloud Run. This pattern gives me reproducible, portable deployments with minimal cold-start overhead and no server management.

        Containerization also simplifies environment parity — the same image that runs locally is the one that runs in staging and production, eliminating the classic "works on my machine" problem.`,
        tools: [
            { type: 'text', title: 'Containerization' },
            { type: 'text', title: 'Dockerfile Authoring' },
            { type: 'text', title: 'Docker Image Builds' },
            { type: 'text', title: 'Artifact Registry Integration' },
            { type: 'text', title: 'Serverless Container Hosting' },
        ],
    },
    {
        name: 'GitHub Actions',
        logo: GitHub_Actions_Logo,
        category: 'DevOps & CI/CD',
        description: `I use GitHub Actions to automate the full software delivery lifecycle. I've built CI/CD pipelines that trigger on pull requests and merges to run linting, tests, Docker image builds, and deployments to GCP Cloud Run — all without manual intervention.

        My pipelines follow a Dev → Staging → Production promotion model, with environment-specific secrets managed via GitHub Secrets and GCP Secret Manager. Automated deployments ensure that every merge to a release branch produces a verified, deployed artifact.

        I've also configured pipelines for infrastructure workflows — triggering Terraform plans on PRs and Terraform applies on merges — giving infrastructure changes the same review and automation rigor as application code.`,
        tools: [
            { type: 'text', title: 'CI/CD Pipelines' },
            { type: 'text', title: 'Automated Deployments' },
            { type: 'text', title: 'Build / Test / Deploy Stages' },
            { type: 'text', title: 'Dev / Staging / Prod Workflows' },
            { type: 'text', title: 'Terraform Plan & Apply Automation' },
        ],
    },
    {
        name: 'Git & GitHub',
        logo: GitHub_Logo,
        category: 'DevOps & CI/CD',
        description: `Git is the foundation of every project I work on. I follow branch-based development workflows — creating feature branches, submitting pull requests, and using code reviews before merging to main. This keeps the main branch stable and ensures all changes go through a review process.

        I use GitHub for repository hosting, PR management, and team collaboration. I'm comfortable with rebasing, resolving merge conflicts, managing commit history, and keeping branches in sync with upstream changes.

        Combined with GitHub Actions for CI/CD, my Git workflow ensures that code changes are tested, reviewed, and deployed in a consistent, traceable way.`,
        tools: [
            { type: 'text', title: 'Branch-based Workflows' },
            { type: 'text', title: 'Pull Requests & Code Reviews' },
            { type: 'text', title: 'Merge & Rebase' },
            { type: 'text', title: 'Repository Management' },
        ],
    },
    {
        name: 'Postman',
        logo: Postman_Logo,
        category: 'Dev Tools & Databases',
        description: `I use Postman throughout the API development lifecycle — from initial exploration to integration testing and documentation. When building or consuming REST APIs, I create organized Postman collections to test individual endpoints, validate request/response shapes, and verify authentication flows like JWT and OAuth.

        Postman is particularly valuable when integrating third-party APIs such as Insightly CRM and RingCentral, where I use it to inspect raw responses, debug CORS configurations, and confirm environment variable values before wiring them into application code.

        I also use Postman to share API documentation and test collections with teammates, making it easier to onboard others to internal service contracts.`,
        tools: [
            { type: 'text', title: 'REST API Testing' },
            { type: 'text', title: 'API Integration Workflows' },
            { type: 'text', title: 'JSON API Debugging' },
            { type: 'text', title: 'CORS & Auth Testing' },
        ],
    },
    {
        name: 'Google Cloud SDK',
        logo: GCP_SDK_Logo,
        category: 'Dev Tools & Databases',
        description: `The Google Cloud SDK is my primary command-line interface for interacting with GCP resources. I use gcloud to manage projects, configure IAM bindings, deploy Cloud Run services, manage Cloud SQL instances, and enable or disable service APIs — tasks I perform regularly in both development and production environments.

        I use gsutil for Cloud Storage operations: uploading files, managing bucket permissions, and syncing static assets. I use bq for querying and managing BigQuery datasets during data exploration and pipeline debugging.

        The SDK integrates naturally into shell scripts and CI/CD pipelines, allowing me to automate GCP interactions in GitHub Actions workflows and Terraform provisioning scripts.`,
        tools: [
            { type: 'text', title: 'gcloud CLI' },
            { type: 'text', title: 'gsutil' },
            { type: 'text', title: 'bq (BigQuery CLI)' },
            { type: 'text', title: 'Service API Management' },
            { type: 'text', title: 'CI/CD Pipeline Integration' },
        ],
    },
    {
        name: 'PostgreSQL',
        logo: PostGres_Logo,
        category: 'Dev Tools & Databases',
        description: `PostgreSQL is my primary relational database for production backend systems. I design normalized schemas, write complex queries with joins and aggregations, and implement CRUD service architectures using ORMs like SQLAlchemy in Python or JPA/Hibernate in Java.

        In GCP environments, I deploy PostgreSQL via Cloud SQL, which handles automated backups, high availability, and managed maintenance windows. I manage schema migrations, connection pooling, and environment-specific database configurations across Dev, Staging, and Production.

        My experience with PostgreSQL spans initial schema design through to production operations — including indexing strategies, query optimization, and integrating the database with FastAPI and Spring Boot backends.`,
        tools: [
            { type: 'text', title: 'Relational Schema Design' },
            { type: 'text', title: 'CRUD Service Architecture' },
            { type: 'text', title: 'Cloud SQL (GCP)' },
            { type: 'text', title: 'Migrations' },
            { type: 'text', title: 'SQLAlchemy / JPA Integration' },
        ],
    },
    {
        name: 'MongoDB',
        logo: MongoDB_Logo,
        category: 'Dev Tools & Databases',
        description: `I use MongoDB as a document-oriented database for applications that benefit from flexible, schema-less data models. I design document structures suited to the access patterns of the application, write queries using the MongoDB query language, and implement CRUD services that interact with collections directly.

        I use MongoDB Compass for visual database exploration — inspecting documents, running ad-hoc queries, and validating data integrity during development. I've also used the MongoDB VS Code extension for in-editor query development.

        MongoDB works well alongside relational databases in polyglot persistence architectures, where I use PostgreSQL for structured transactional data and MongoDB for more dynamic or hierarchical content.`,
        tools: [
            { type: 'text', title: 'Document Store Design' },
            { type: 'text', title: 'MongoDB Compass' },
            { type: 'text', title: 'CRUD Services' },
            { type: 'text', title: 'NoSQL Schema Design' },
            { type: 'text', title: 'Polyglot Persistence' },
        ],
    },
];

export default languages;
