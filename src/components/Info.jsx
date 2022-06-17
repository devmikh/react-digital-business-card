import photo from "../images/photo.jpg";
import { GrMail } from 'react-icons/gr';
import { BsLinkedin } from 'react-icons/bs';

export default function Info() {
    return (
        <div className="info">
            <img src={photo} alt="Mikhail" className="info--photo" />
            <h1 className="info--name">Mikhail Serebriakov</h1>
            <h3 className="info--occupation">React Developer</h3>
            <h4 className="info--website">devmikh.info</h4>
            <div className="info--buttons">
                <button className="info--buttons--email"><GrMail /><span className="info--buttons--text">Email</span></button>
                <button className="info--buttons--linkedin"><BsLinkedin /><span className="info--buttons--text">LinkedIn</span></button>
            </div>
        </div>
    )
}