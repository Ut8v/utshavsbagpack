import "../scss/home.scss"
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialIcons: React.FC = () => {
    return (
        <div className="social-icons">
            <div className="s-icon">
                <a href="https://github.com/Ut8v" target="_blank">
                    <FaGithub className="icon" size={40} />
                </a>
            </div>
            <div className="s-icon">
                <a href="https://www.linkedin.com/in/utshavkhatiwada/" target="_blank">
                    <FaLinkedin className="icon" size={40} />
                </a>
            </div>
        </div>
    );
};

export default SocialIcons;
