import './Slider.css';
import React, { useState, useEffect } from 'react';
import BtnSlider from './BtnSlider';
import dataSlider from "./dataSlider";
import Card from '../Cards/Card';

export const Slider = () => {

  //functions to move images left and right on a slider
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

    // Automatically change slides at a set interval
    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000); // Change image every 8 seconds
  
      // Clear interval on component unmount to prevent memory leaks
      return () => clearInterval(interval);
    }, [slideIndex]);

    return (
      <div>
        {/* Slider Container */}
        <div className="container-slider">
          {dataSlider.map((obj, index) => (
            <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
              <img src={process.env.PUBLIC_URL + obj.image} alt={`Slide ${index + 1}`} />
              
              {/* Overlay Text */}
              {/* <div className="slide-text">
                <h2>{obj.title}</h2>
                <p>{obj.description}</p>
              </div> */}
            </div>
          ))}
  
          <BtnSlider moveSlide={nextSlide} direction={"next"} />
          <BtnSlider moveSlide={prevSlide} direction={"prev"} />
  
          <div className="dots-container">
            {dataSlider.map((_, index) => (
              <div
                key={index}
                onClick={() => moveDot(index + 1)}
                className={slideIndex === index + 1 ? "dot active" : "dot"}
              ></div>
            ))}
          </div>
        </div>
  
        {/* Card Component Below the Slider */}
        <Card 
        title="Welcome to BudgetMunch!" 
        description="Tasty Finds That Won’t Break the Bank." 
        link="/login" // This is the URL where the Login button will navigate
      />
      </div>
    );
  };