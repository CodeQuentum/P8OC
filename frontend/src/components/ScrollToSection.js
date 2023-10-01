import React from 'react';

const ScrollToSection = ({ sectionId, children }) => {
  const scrollToSection = () => {
    const targetElement = document.getElementById(sectionId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    } else {
      console.log(`Section with ID ${sectionId} not found.`);
    }
  };

  return (
    <div className="scroll-to-section" onClick={scrollToSection}>
      {children}
    </div>
  );
};

export default ScrollToSection;