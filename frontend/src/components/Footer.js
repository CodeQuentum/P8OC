import React from 'react';
import logoFooter from '../assets/logo-footer.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import '../styles/Footer.css';

function Footer() {
    return (
        <footer>
            <img src={logoFooter} alt='Logo QWD' />
            <div className='contactFooter'>
                <p>Contact :</p>
                <div className='lienFooter'>
                    <a href="https://docs.google.com/forms/d/1viCd-oEjAroy7UwM6tRgcNjI2p6M-CkW3_ezNTZguA4/edit" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGoogle} />
                    </a>
                    <a href="https://www.linkedin.com/in/quentin-nicot-aa4343131/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;