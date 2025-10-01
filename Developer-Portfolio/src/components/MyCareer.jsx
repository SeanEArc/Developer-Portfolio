import timelineElements from './timelineElements';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaSchool } from 'react-icons/fa';

const MyCareer = () => {
    const workIconStyles = { background: '#06D6A0' };
    const schoolIconStyles = { background: '#f9c74f' };

    return (
        <div className=" ">
            <h1 className="text-4xl font-bold pb-4 text-zinc-300">My Career</h1>

            <hr className="max-w-[65%] mx-auto text-zinc-200" />

            <VerticalTimeline>
                {timelineElements.map(element => {
                    const isWorkIcon = element.icon === 'work';

                    return (
                        <VerticalTimelineElement
                            key={element.id}
                            date={element.date}
                            dateClassName="my-date text-zinc-300"
                            iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                            icon={isWorkIcon ? <FaBriefcase /> : <FaSchool />}
                        >
                            <h3 className="vertical-timeline-element-title font-bold text-xl">{element.title}</h3>
                            <h4 className="vertical-timeline-element-subtitle font-semibold text-lg">{element.location}</h4>
                            <p id="description">{element.description}</p>
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </div>
    );
};

export default MyCareer;
