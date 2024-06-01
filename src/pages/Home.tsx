// Home.tsx
import React from 'react';
import Hero from '../components/Hero/Hero';
import Card from '../components/Card/Card';
import './Home.css';


const HomePage = () => {
  // Sample data for cards, you can replace this with actual data
  const cardsData = [
    {
      id: 1,
      image: 'images/card1.webp',
      overlay_text: '',
      title: 'Panel Work',
      description: 'Lorem aoseut aoeusi ipsum dolor lorem.Lorem aoseut aoeusi ipsum dolor lorem.Lorem aoseut aoeusi ipsum dolor lorem.Lorem aoseut aoeusi ipsum dol'
    },
    {
      id: 2,
      image: 'images/card2.webp',
      overlay_text: '',
      title: 'Card Title 2',
      description: 'Description for card 2...'
    },
    {
      id: 3,
      image: 'images/card2.webp',
      overlay_text: '',
      title: 'Card Title 2',
      description: 'Description for card 2...'
    },
    {
      id: 4,
      image: 'images/card2.webp',
      overlay_text: '',
      title: 'Card Title 2',
      description: 'Description for card 2...'
    },
    // Add more cards as needed...
  ];

  return (
    <div className = "main-content">
     <Hero />
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
     <div id="services" className="section services-section">
      <h2>Our Services</h2>
      <div className="cards-container">
        {cardsData.map(card => (
          <Card
            key={card.id}
            image={card.image}
            overlay_text={card.overlay_text}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
     </div>
     <div id="contact" className="section contact-section">
        <h2>Contact Us</h2>
        <p>contact details</p>
     </div>

    </div>
  );
};

export default HomePage;
