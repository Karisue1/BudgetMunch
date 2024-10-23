import './NotFoundPage.css';
import React, { Component } from "react";
import notfoundImage from './Login/Components/notfound.png';

export const NotFoundPage = () => {
    return (
        
            <div className='not-found-page' style={{backgroundImage: `url(${notfoundImage})`,
                
                backgroundSize: 'cover',   
                backgroundPosition: 'center',  
                height: '90vh',    
                width: '90vw',     
                display: 'flex',    
                flexDirection: 'column',
                alignItems: 'top',
                color: '#000000'     
            }}> 
            <h1>How did you get here?</h1>
                <p>This page doesn't exist!! What went wrong?</p>
            </div>
        
    )
}
