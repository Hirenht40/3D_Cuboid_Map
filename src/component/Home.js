import React, { useState, useEffect } from 'react';
import useTypewriter from 'react-typewriter-hook';
import './Home.css';
import myImage from '../images/1614466.png';
import { useNavigate } from "react-router-dom";





const Home = () => {
  const navigate = useNavigate();

 
  const text = 'Create a 3D Cuboid with location from Google maps.';
  const [showCursor, setShowCursor] = useState(true);
  const currentText = useTypewriter(text, {
    delay: 30, // set the typing delay to 30ms
    onTyped: () => {
      console.log('Typing complete!');
      setShowCursor(false); // hide the cursor when typing is complete
    }
  });

  useEffect(() => {
    console.log(`showCursor: ${showCursor}`);
  }, [showCursor]);

  // add the cursor character "|" after the typed text
  const typedText = currentText ? currentText.split('').map((char, index) => (
    <span key={index}>
      {char}
      {index === currentText.length - 1 && showCursor && <span className="blink-cursor">|</span>}
    </span>
  )) : null;
  function handleClick() {
    navigate("/location");
  }
  
  
  return (
    <div className="home-container">
      <div className="left-section">
        <img src={myImage} alt="My Image" />
      </div>
      <div className="middle-section">
        <div className='text'>
          <h2 className='hello'>Hello,</h2>
          <div className="typing-text">
            {typedText}
          </div>
          <button onClick={handleClick} replace={true} className='button-85'>Let's Create!</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
