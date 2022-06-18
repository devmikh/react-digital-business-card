import photo from "../images/photo.jpg";
import { GrMail } from 'react-icons/gr';
import { BsLinkedin } from 'react-icons/bs';

export default function Info() {
    return (
        <div className="info">
            <img src={photo} alt="Mikhail" className="info--photo" />
            <h1 className="info--name">Mikhail Serebriakov</h1>
            <h3 className="info--occupation">Front-End Developer</h3>
            <a href="https://resume.creddle.io/resume/9bs4b9bxn9r" target="_blank" rel="noreferrer" className="info--website">My Resume</a>
            <div className="info--buttons">
                <a href="mailto:mishacyb@gmail.com" className="info--buttons--email"><GrMail /><span className="info--buttons--text">Email</span></a>
                <a href="https://www.linkedin.com/in/serebriakovm/" target="_blank" rel="noreferrer" className="info--buttons--linkedin"><BsLinkedin /><span className="info--buttons--text">LinkedIn</span></a>
            </div>
        </div>
    )
}