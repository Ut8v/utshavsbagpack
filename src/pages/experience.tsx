import React from "react";
import { FaBriefcase } from "react-icons/fa";

const Experience: React.FC = () => {
    const experiences = [
        {
            image: "https://media.licdn.com/dms/image/v2/C4E0BAQED1h_GavczqQ/company-logo_200_200/company-logo_200_200/0/1630628869629/uc_itsc_logo?e=1743033600&v=beta&t=_HExRgXYF9PB2Zm8fQx_OadtX48Jcr19bGZtH_BtVcM",
            company: "University of Cincinnati Information Technology Solution Center",
            techStack: ["Technologies: ","React, ", "TypeScript, ", "Express.js, ", "PostgreSQL, ", "MySQL,", "Docker"],
            role: "Software Development Co-op",
            duration: "Aug 2024 - Present",
            responsibilities: [
                "Develop and maintain front-end interfaces using React and TypeScript, building new UIs and enhancing existing features.",
                "Design, create, and modify REST APIs using Express.js, ensuring seamless integration with front-end components.",
                "Write and optimize SQL queries for PostgreSQL and MySQL databases, improving data retrieval and system performance.",
            ],
        },
        {
            image: "https://gmicompanies.com/wp-content/uploads/2024/07/GMi-Logo-79px.png",
            company: "GMi Companies",
            techStack: ["Technologies: ", "C/AL, ", "Microsoft Dynamics NAV 2018, SQL"],
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
                           <div className="company-logo-container">
                            <img src={exp.image} alt={exp.company} className="company-logo"  />
                            </div>
                            <h2 className="company-name">{exp.company}</h2>
                            <p className="role">{exp.role}</p>
                            <p className="duration">{exp.duration}</p>
                            <div className="tech-stack">
                                {exp.techStack.map((tech, i) => (
                                    <span key={i} className="tech text-info">{tech}</span>
                                ))}
                            </div>
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