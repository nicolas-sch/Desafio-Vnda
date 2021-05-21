import React from 'react';
import './section2.css';
import Card1 from '../../assets/card1.png';
import Card2 from '../../assets/card2.png';
import Card3 from '../../assets/card3.png';
import Fade from 'react-reveal/Fade';

function Section2() {

    return (
        <>
        <div className="section2-container" id="section2">
            <div className="section2-wrapper">
                <div className="section2-text">
                    <p>Lorem ipsum dolor</p>
                    <h1>Lorem isum dolor sit amet</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna
                    aliqua. Metus vulputate eu scelerisque
                    felis imperdiet proin fermentum. Praesent
                    semper feugiat nibh sed pulvinar proin
                    gravida.
                    </p>
                    <i class="fas fa-long-arrow-alt-down"></i>
                </div>
                <div className="section2-cards">
                <Fade top>
                    <div className="section2-card1">
                        <div className="card-img">
                                <img src={Card1} alt="loja1" />
                        </div>
                        <div className="card-text">
                            <h2>Titulo</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo.</p>
                        </div>
                    </div>
                </Fade>
                <Fade top>
                    <div className="section2-card2">
                        <div className="card-img2">
                            <img src={Card2} alt="loja1" />
                        </div>
                        <div className="card-text2">
                            <h2>Titulo</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo.</p>
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className="section2-card3">
                        <div className="card-img3">
                            <img src={Card3} alt="loja1" />
                        </div>
                        <div className="card-text">
                            <h2>Titulo</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo.</p>
                        </div>
                    </div>
                </Fade>
                </div>
            </div>
        </div>
        </>
    )
}

export default Section2;