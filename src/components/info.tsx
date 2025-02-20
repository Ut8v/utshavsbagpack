import { Card, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/info.scss';
import { FaGithub } from "react-icons/fa";
import DownloadResume from "./resume.tsx";
const Info: React.FC = () => {
  return (
    <div className="info-div">
        <Card className="info-card">
            <Card.Header>
                <Nav variant="pills" defaultActiveKey="#first"> 
                    <Nav.Item> 
                        <Nav.Link className="disabled text-white intro-header">Hi, I am Utshav Khatiwada</Nav.Link>
                        <p className="text-info">Open to co-op/internship opportunities</p>
                        <hr className="text-info"/>
                    </Nav.Item>
                </Nav>
            </Card.Header>
        <Card.Body> 
            <Card.Text className="text-white intro-text">
            <ul>
                <li>I am a full-stack developer with experience in building web applications using React, Node.js, Express, PostgreSQL, and SQL.</li>
                 <hr/>
                <li>I am also proficient in Java and C#, with a strong foundation in both frontend and backend development.</li>
                <hr/>
                <li>Currently, I am pursuing a Bachelor of Science in Information Technology at University of Cincinnati.</li>
            </ul>
            </Card.Text>
            <Card.Text className="text-info intro-text">
                 <DownloadResume/>
                <br></br>
                <h3>If you would like to look at the source code visit my github at <a href="https://github.com/Ut8v/utshavsbagpack" target="_blank"><FaGithub fill="green" size={40}/></a></h3>
            </Card.Text>
        </Card.Body>
    </Card>
    </div>
  );
}

export default Info;