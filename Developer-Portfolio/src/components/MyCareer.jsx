import timelineElements from './timelineElements';

const CareerCard = ({ element, index }) => {
    const hasAccomplishments = element.accomplishments?.length > 0;
    const hasProjects = element.projects?.length > 0;
    const detailsGridClass = `mt-4 grid gap-6 ${hasAccomplishments && hasProjects ? 'md:grid-cols-2' : ''}`;

    return (
        <div
            className={`flex flex-col md:flex-row rounded-xl p-6 gap-8 mb-10 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
        >
            <div className="flex flex-col justify-center md:w-1/2">

                <h3 className="text-2xl font-bold text-text-primary mb-1">{element.title}</h3>

                <p className="text-text-muted text-sm mb-1">{element.location}</p>

                <p className="text-accent font-semibold text-sm mb-4">{element.date}</p>

                <p className="text-text-muted text-base whitespace-pre-line">{element.description}</p>

                {(hasAccomplishments || hasProjects) && (
                    <div className={detailsGridClass}>
                        {hasAccomplishments && (
                            <div>
                                <h4 className="relative inline-block pb-2 text-sm font-bold uppercase tracking-widest text-text-primary mb-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-text-primary/25 after:via-text-primary after:to-text-primary/25">
                                    Accomplishments
                                </h4>
                                <ul className="space-y-1">
                                    {element.accomplishments.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-text-muted text-sm">
                                            <span className="text-accent mt-1">{'>'}</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {hasProjects && (
                            <div>
                                <h4 className="relative inline-block pb-2 text-sm font-bold uppercase tracking-widest text-text-primary mb-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-text-primary/25 after:via-text-primary after:to-text-primary/25">
                                    Projects
                                </h4>
                                <div className="space-y-3">
                                    {element.projects.map((project, i) => (
                                        <div key={i} className="border-l-2 border-accent/40 pl-3">
                                            <p className="text-text-primary text-sm font-semibold">{project.name}</p>
                                            <p className="text-text-muted text-sm">{project.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className="md:w-1/2 flex items-center justify-center">
                <span className="text-5xl font-bold text-text-primary/50 text-center leading-tight">
                    {element.date}
                </span>
            </div>
        </div>
    );
};

const MyCareer = () => {
    return (
        <div className="w-[95%] mx-auto pt-10 pb-6">
            <h2 className="text-3xl font-bold uppercase tracking-widest text-text-primary">
                My Career
            </h2>

            <div className="my-2 h-[2px] w-[60%] mx-auto bg-gradient-to-r from-text-muted/10 via-text-muted/35 to-text-muted/10" />

            <div className="mt-2">
                {timelineElements.map((element, index) => (
                    <CareerCard key={element.id} element={element} index={index} />
                ))}
            </div>
        </div>
    );
};

export default MyCareer;
