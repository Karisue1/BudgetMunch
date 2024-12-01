import Home from "./Home"
import Navbar from "../layout/Navbar"
import React, { useState } from 'react'
// import BtnSlider from './BtnSlider'
// import dataSlider from "../Slider/dataSlider"
import { Slider } from "../Slider/Slider"
import '../Slider/Slider.css';

export const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <Slider/>
    </>
  );
}