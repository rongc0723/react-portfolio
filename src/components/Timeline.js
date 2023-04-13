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
        icon: <FontAwesomeIcon icon={faBug} size="2x" />,
        description: " Created a test automation framework using Selenium and Java to test the company's website. Developed a test suite that tests the company's website for bugs and errors."
    },
    {
        date: "Feb 2023 - Present",
        company: "Boston Hacks",
        location: "(Boston, MA)",
        position: "Software Engineer",
        icon: <FontAwesomeIcon icon={faCode} size="2x" />,
        description: "Redesigned and developed a new 2023 Boston Hacks hackathon website using React and Firebase. Created a website that hosts all previous Boston Hacks hackathons and their corresponding websites."
    },
    {
        date: "Jun 2022 - Aug 2022",
        company: "Youth4AM",
        location: "(Remote)",
        position: "Database Intern",
        icon: <FontAwesomeIcon icon={faDatabase} size="2x" />,
        description: "Created a MySQL database that stores all company data and allows for easy access to data from scratch. Designed a user-friendly interface that allowed 100+ teaching assistnts to easily access and update student data using Javacript and PHP."
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
                    <h3 className="vertical-timeline-element-title">{experience.company + " - " + experience.position}</h3>
                    <p>{experience.description}</p>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    )
}

export default Timeline