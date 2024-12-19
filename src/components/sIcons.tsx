import "../scss/home.scss"
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialIcons: React.FC = () => {
    return (
        <div className="social-icons">
            <div className="s-icon">
                <a href="/">
                    <FaGithub className="icon" size={40} />
                </a>
            </div>
            <div className="s-icon">
                <a href="/">
                    <FaLinkedin className="icon" size={40} />
                </a>
            </div>
        </div>
    );
};

export default SocialIcons;
