import React from 'react'
import './Slider.css'
import { HiArrowSmLeft } from "react-icons/hi"; // <HiArrowSmLeft />
import { HiArrowSmRight } from "react-icons/hi"; // <HiArrowSmRight />

//the buttons for the slider on the Home page
export default function BtnSlider({direction, moveSlide}) {
  console.log(direction, moveSlide);

  return (
    <button onClick={moveSlide} className={direction === "next" ? 'btn-slide next' : 'btn-slide prev'}>
        {direction === "next" ? <HiArrowSmRight /> : <HiArrowSmLeft />}
    </button>
  )
}

// Hello