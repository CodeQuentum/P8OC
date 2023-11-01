import React, { useEffect, useState } from 'react';
import logo from '../assets/logo-header.png';
import ScrollToSection from './ScrollToSection'; 
import '../styles/Header.css';

function Header() {
  const [activeSection, setActiveSection] = useState('a-propos');

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
            <ScrollToSection sectionId="a-propos"> 
              <button
                className={`headerButton ${activeSection === 'a-propos' ? 'active-button' : ''}`}
              >
                A propos
              </button>
            </ScrollToSection>
          </li>
          <li>
            <ScrollToSection sectionId="mes-competences"> 
              <button
                className={`headerButton ${activeSection === 'mes-competences' ? 'active-button' : ''}`}
              >
                Compétences
              </button>
            </ScrollToSection>
          </li>
          <li>
            <ScrollToSection sectionId="mes-projets"> 
              <button
                className={`headerButton ${activeSection === 'mes-projets' ? 'active-button' : ''}`}
              >
                Mes projets
              </button>
            </ScrollToSection>
          </li>
          <li>
            <ScrollToSection sectionId="contact"> 
              <button
                className={`headerButton ${activeSection === 'contact' ? 'active-button' : ''}`}
              >
                Contact
              </button>
            </ScrollToSection>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;