import './NotFoundPage.css';
import React, { Component } from "react";
import notfoundImage from './Login/Components/notfound.png';
import Navbar from '../layout/Navbar';
export const NotFoundPage = () => {

    //display for the not found page
    return (
        
        <><div className='navebar'>
            <Navbar />
        </div><div className='page-container'>
                <div className='not-found-page' style={{
                    backgroundImage: `url(${notfoundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundBlendMode: 'overlay',
                    height: '100vh',
                    width: '100vw',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'top',
                    color: '#000000'
                }}>
                    <h1>How did you get here?</h1>
                    <p>This page doesn't exist!! What went wrong?</p>
                </div>
            </div></>
    )
}
