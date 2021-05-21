import React from 'react';
import './hero.css';
import Video from '../../assets/Video.mp4';

function Hero() {

    return (
        <>
        <div className="hero-container" id="hero">
            <video autoPlay loop muted
            style={{
                position: "absolute",
                width: "100%",
                left: "50%",
                top: "80%",
                height: "90%",
                objectFit: "cover",
                transform: "translate(-50%, -80%)",
                zIndex: "-1"
            }}
            >
                <source src={Video} type="video/mp4" />
            </video>
        </div>
        </>
    )
}

export default Hero;