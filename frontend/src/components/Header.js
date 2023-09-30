import React, { useEffect, useState } from 'react';
import logo from '../assets/logo-header.png';
import '../styles/Header.css';

function Header() {
  const [activeSection, setActiveSection] = useState('a-propos');

  const scrollToSection = (sectionId) => {
    const targetElement = document.getElementById(sectionId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['a-propos', 'mes-competences', 'mes-projets', 'contact'];

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top >= 0 && rect.bottom >= 0 && rect.top <= window.innerHeight;

          if (isVisible) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <div className='logoContainer'>
        <img src={logo} alt='Logo QDW' />
      </div>
      <nav>
        <ul>
          <li>
            <button
              className={`headerButton ${activeSection === 'a-propos' ? 'active-button' : ''}`}
              onClick={() => scrollToSection('a-propos')}
            >
              A propos
            </button>
          </li>
          <li>
            <button
              className={`headerButton ${activeSection === 'mes-competences' ? 'active-button' : ''}`}
              onClick={() => scrollToSection('mes-competences')}
            >
              Compétences
            </button>
          </li>
          <li>
            <button
              className={`headerButton ${activeSection === 'mes-projets' ? 'active-button' : ''}`}
              onClick={() => scrollToSection('mes-projets')}
            >
              Mes projets
            </button>
          </li>
          <li>
            <button
              className={`headerButton ${activeSection === 'contact' ? 'active-button' : ''}`}
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;