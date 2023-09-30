import React from 'react';
import '../styles/ReturnButton.css';
import { Link } from 'react-router-dom';

function ReturnButton() {
    return (
        <div className='return'>
            <Link to="/">Retour à l'accueil</Link>
        </div>
    )
}

export default ReturnButton;