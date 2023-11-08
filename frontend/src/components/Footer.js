import React from 'react';
import logoFooter from '../assets/logo-footer.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import '../styles/Footer.css';

function Footer() {
    return (
        <footer>
            <img src={logoFooter} alt='Logo QWD' />
            <div className='contactFooter'>
                <h4>Contact :</h4>
                <div className='lienFooter'>
                <a href="https://www.linkedin.com/in/quentin-nicot-aa4343131/" target="_blank" rel="noopener noreferrer" aria-label="Lien vers le profil LinkedIn de Quentin Nicot">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;