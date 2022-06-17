import photo from "../images/photo.jpg";

export default function Info() {
    return (
        <div>
            <img src={photo} alt="Mikhail" />
            <h1>Mikhail Serebriakov</h1>
            <h3>React Developer</h3>
            <h4>devmikh.info</h4>
            <button>Email</button>
            <button>LinkedIn</button>
        </div>
    )
}