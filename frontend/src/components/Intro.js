import React from 'react';
import '../styles/Intro.css';
import backgroundImg from '../assets/background-intro.jpeg'; 


function Intro() {
  const introStyle = {
    backgroundImage: `url(${backgroundImg})`,
  };

  return (
    <div className="intro-container" style={introStyle}>
      <h1 className="typing-effect">Quentin, Développeur Web.</h1>
      <p>Bienvenue sur mon portfolio</p>
      <hr className="intro-divider" />
    </div>
  );
}

export default Intro;
