// About.tsx
import React from 'react';
import './About.css'

const About: React.FC = () => {
  return (
    <div id="about" className="section about-section">
    <h2>About Us</h2>
      <div className="about-image-container">
        <img src='images/steve-and-josh.webp' alt="steve-and-josh" className="about-image"/>
          <div className="about-overlay">
            <h2>Family Business</h2>
            <p> family blah blah family blah blah family blah blah family blah blah family blah blah family blah blah family blah blah family blah blah family blah blah family blah blah family blah blah family blah blah family blah blah family blah blah family blah blah family blah blah family blah blah family blah blah family blah blah family blah blah family blah blah </p>
          </div>
        </div>
      </div>
    );
};

export default About;