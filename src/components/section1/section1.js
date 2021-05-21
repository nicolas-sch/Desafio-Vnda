import React from 'react';
import './section1.css';
import Slide from 'react-reveal/Slide';
import Cart from '../../assets/cart.jpg'

function Section1() {

    return (
        <>
        <div className="section1-container" id="section1">
            <div className="section1-wrapper">
                <Slide left>
                    <img src={Cart} alt="Cart" className="section1-img"/>
                </Slide>
                <Slide left>
                    <img src={Cart} alt="Cart" className="section1-img"/>
                </Slide>
                <Slide left>
                    <img src={Cart} alt="Cart" className="section1-img"/>
                </Slide>
                <Slide right>
                    <img src={Cart} alt="Cart" className="section1-img"/>
                </Slide>
                <Slide right>
                    <img src={Cart} alt="Cart" className="section1-img"/>
                </Slide>
                <Slide right>
                    <img src={Cart} alt="Cart" className="section1-img"/>
                </Slide>
            </div>
        </div>
        </>
    )
}

export default Section1;