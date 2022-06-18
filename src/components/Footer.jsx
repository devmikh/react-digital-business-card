import {
    FaTwitterSquare,
    FaFacebookSquare,
    FaInstagramSquare,
    FaGithubSquare
} from 'react-icons/fa';
 
export default function Footer() {
    return (
        <footer className="footer">
            <a href="https://twitter.com/serebriakovm" target="_blank" rel="noreferrer"><FaTwitterSquare /></a>
            <a href="https://www.facebook.com/serebriakovm/" target="_blank" rel="noreferrer"><FaFacebookSquare /></a>
            <a href="https://www.instagram.com/serebriakovmik/" target="_blank" rel="noreferrer"><FaInstagramSquare /></a>
            <a href="https://github.com/devmikh" target="_blank" rel="noreferrer"><FaGithubSquare /></a>
        </footer>
    )
}