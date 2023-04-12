import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import './Timeline.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDatabase, faBug } from "@fortawesome/free-solid-svg-icons";

const experiences = [
    {
        date: "May 2023 - Present",
        company: "Amica Mutual Insurance",
        location: "(Remote)",
        position: "Student QA Developer",
        icon: <FontAwesomeIcon icon={faBug} size="2x" />
    },
    {
        date: "Feb 2023 - Present",
        company: "Boston Hacks",
        location: "(Boston, MA)",
        position: "Software Engineer",
        icon: <FontAwesomeIcon icon={faCode} size="2x" />
    },
    {
        date: "Jun 2022 - Aug 2022",
        company: "Youth4AM",
        location: "(Remote)",
        position: "Database Intern",
        icon: <FontAwesomeIcon icon={faDatabase} size="2x" />
    }
]

const Timeline = () => {
    return (
        <VerticalTimeline className="timeline">
            {experiences.map(experience => (
                <VerticalTimelineElement
                    key={experience.company}
                    date={experience.date + " " + experience.location}
                    iconStyle={{ background: "#FAF9F6", color: "#000" }}
                    contentStyle={{ background: "rgb(0,0,0,0.5)", color: "#ffffff", backdropFilter: "blur(5px)"}}
                    dateClassName="date"
                    icon={experience.icon}
                >
                    <h3 className="vertical-timeline-element-title">{experience.company}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{experience.position}</h4>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    )
}

export default Timeline