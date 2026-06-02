import timelineElements from './timelineElements';

const CareerCard = ({ element, index }) => {
    return (
        <div
            className={`flex flex-col md:flex-row rounded-xl p-6 gap-8 mb-10 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
        >
            <div className="flex flex-col justify-center md:w-1/2">

                <h3 className="text-2xl font-bold text-text-primary mb-1">{element.title}</h3>

                <p className="text-text-muted text-sm mb-1">{element.location}</p>

                <p className="text-accent font-semibold text-sm mb-4">{element.date}</p>

                <p className="text-text-muted text-base whitespace-pre-line">{element.description}</p>

                {element.accomplishments && element.accomplishments.length > 0 && (
                    <div className="mt-4">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-text-primary mb-2">
                            Accomplishments
                        </h4>
                        <ul className="space-y-1">
                            {element.accomplishments.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-text-muted text-sm">
                                    <span className="text-accent mt-1">▸</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {element.projects && element.projects.length > 0 && (
                    <div className="mt-4">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-text-primary mb-2">
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
