import React from 'react';
import './section4.css';
import Fade from 'react-reveal/Fade';
import Insta1 from '../../assets/insta1.svg';
import Insta2 from '../../assets/insta2.svg';


function Section4() {

    return (
        <>
        <div className="section4-container" id="section4">
            <div className="section4-wrapper">
                <div className="section4-card">
                    <Fade top>
                        <img src={Insta1} alt="insta1" />
                    </Fade>
                </div>
                <Fade bottom>
                    <div className="section4-text-card">
                        <p>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna
                        aliqua. Metus vulputate eu scelerisque
                        felis imperdiet proin fermentum.
                        Praesent semper feugiat nibh sed
                        pulvinar proin gravida.
                        </p>
                    </div>
                </Fade>
                
                <div className="section4-card">
                    <Fade top>
                        <img src={Insta2} alt="insta1" />
                    </Fade>
                </div>
            </div>
        </div>
        </>
    )
}

export default Section4;