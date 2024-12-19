import React from "react";
import "../scss/projects.scss";
import { FidgetSpinner } from "react-loader-spinner";
import { TbPaperBag } from "react-icons/tb";
const Experience = React.lazy(() => import('./experience.tsx'));

const Projects: React.FC = () => {
    const projectlist = [
        {
            name: "TeamZLit",
            description: "Ongoing project for my senior capstone course. A web application to help students find team members for group projects.",
            link: "https://github.com/Ut8v/TeamZlit"
        },
        {
            name: "Automated twitter bot",
            description: "A twitter bot that uses openai's GPT-3 to generate tweets and post them to twitter using the twitter API.",
            link: "https://github.com/Ut8v/AutomatedTwitter"
        },
    ];

    return (
       <div className="projects-container container">
            <div className="row">
                <div className="col-8">
                    <React.Suspense fallback={<div className="loading"><FidgetSpinner /></div>}>
                        <Experience />
                    </React.Suspense>
                </div>
                <div className="col-4 mt-5">
                    <h1 className="section-title text-center mb-4"><TbPaperBag fill="green"/> Projects</h1>
                    <hr />
                    {projectlist.map((project, index) => (
                        <div className="project-card mb-4 p-4 shadow rounded" key={index}>
                            <h2 className="project-title mb-2">{project.name}</h2>
                            <p className="project-description mb-3">{project.description}</p>
                            {project.link && <a href={project.link} className="project-link btn btn-primary" target="_blank" rel="noopener noreferrer">View Source Code</a>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
