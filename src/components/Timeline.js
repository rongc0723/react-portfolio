import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import './Timeline.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDatabase, faBug } from "@fortawesome/free-solid-svg-icons";

const experiences = [
    {
        date: "May 2024 - Present",
        company: "Spectrum",
        location: "(Denver, CO)",
        position: "Platforms Engineer Intern",
        icon: <FontAwesomeIcon icon={faCode} size="2x" />,
        description: "Developed and maintained infrastructure for the Data Science team to run their machine learning workflows and deploy models with ease "
    },
    {
        date: "Feb 2023 - Present",
        company: "Boston Hacks",
        location: "(Boston, MA)",
        position: "Front-End Engineer / Organizer",
        icon: <FontAwesomeIcon icon={faCode} size="2x" />,
        description: "Spearheaded the development and continuous maintenance of BostonHacks’ hackathon website to deliver a seamless experience for a community of over 500 hackers."
    },
    {
        date: "Sept 2023 - Aug 2024",
        company: "Quantly",
        location: "(Boston, MA)",
        position: "Lead Technical Developer",
        icon: <FontAwesomeIcon icon={faCode} size="2x" />,
        description: "Guided a cross-functional team consisting of 4 developers and 1 UX designer to successfully establish and develop a startup dedicated to providing college students with a platform to practice for quantitative analysis interviews."
    },
    {
        date: "May 2023 - Aug 2023",
        company: "Amica Mutual Insurance",
        location: "(Lincoln, RI)",
        position: "Student QA Developer",
        icon: <FontAwesomeIcon icon={faBug} size="2x" />,
        description: "  Developed and integrated automated testing within Amica’s Quality Assurance framework using Selenium and TestNG, resulting in a 30% reduction in manual testing and enhancing testing efficiency."
    },
    {
        date: "Jun 2022 - Aug 2022",
        company: "Youth4AM",
        location: "(Remote)",
        position: "Database Intern",
        icon: <FontAwesomeIcon icon={faDatabase} size="2x" />,
        description: "Pioneered the development of a comprehensive full-stack application that empowered 100+ teaching assistants to efficiently evaluate and manage a diverse cohort of 100+ students."
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