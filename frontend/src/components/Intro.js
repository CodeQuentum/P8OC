import React from 'react';
import '../styles/Intro.css';
import backgroundImg from '../assets/background-intro.avif'; 


function Intro() {
  const introStyle = {
    backgroundImage: `url(${backgroundImg})`,
  };

  return (
    <div className="intro-container" style={introStyle} aria-label="Image de fond : des mains qui code sur un mac">
      <h1 className="typing-effect">Quentin, Développeur Web.</h1>
      <h2>Bienvenue sur mon portfolio</h2>
      <hr className="intro-divider" />
    </div>
  );
}

export default Intro;
