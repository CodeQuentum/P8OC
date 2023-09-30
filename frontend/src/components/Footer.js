import React from 'react';
import logoFooter from '../assets/logo-footer.png';
import '../styles/Footer.css';

function Footer() {
    return(
        <footer>
            <img src={logoFooter} alt='Logo QWD'/>
        </footer>
    )
}

export default Footer;