import React from "react";
import { FaBriefcase } from "react-icons/fa";

const Experience: React.FC = () => {
    const experiences = [
        {
            company: "University of Cincinnati Information Technology Solutions Center",
            role: "Software Development Co-op",
            duration: "Aug 2024 - Present",
            responsibilities: [
                "Develop and maintain front-end interfaces using React and TypeScript, building new UIs and enhancing existing features.",
                "Design, create, and modify REST APIs using Express.js, ensuring seamless integration with front-end components.",
                "Write and optimize SQL queries for PostgreSQL and MySQL databases, improving data retrieval and system performance.",
            ],
        },
        {
            company: "GMi Companies",
            role: "Information Services Intern",
            duration: "Aug 2023 - July 2024",
            responsibilities: [
                "Created an automated email system that regularly notified customers when their quotes were about to expire, utilizing NAV databases, pages, and reports to ensure seamless operation.",
                "Developed and implemented custom functionalities in Microsoft Dynamics NAV 2018 using C/AL.",
                "Led production-level projects, applying C/AL programming skills to build, test, and optimize custom features, improving system efficiency and user experience.",
            ],
        },
    ];

    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <h1 className="section-title">
                    <FaBriefcase className="icon" /> Experience
                </h1>
                <hr />
                <div className="experience-list">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-card">
                            <h2 className="company-name">{exp.company}</h2>
                            <p className="role">{exp.role}</p>
                            <p className="duration">{exp.duration}</p>
                            <ul className="responsibilities">
                                {exp.responsibilities.map((task, i) => (
                                    <li key={i}>{task}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;