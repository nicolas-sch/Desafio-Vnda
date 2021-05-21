import React from 'react';
import Slide from 'react-reveal/Slide';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import "swiper/components/navigation/navigation.min.css"
import "swiper/swiper.min.css";
import './section3.css';
import Ecommerce from '../../assets/Ecommerce.png';
import TV from '../../assets/tv.png';
import Notebook from '../../assets/notebook.png';
import VideGame from '../../assets/videogame.svg';

SwiperCore.use([Navigation, Pagination]);

function Section3() {

    return (
        <>
        <div className="section3-container" id="section3">
            <div className="section3-wrapper">
                <div className="section3-img">
                    <Slide left>
                        <img src={Ecommerce} alt="ecommerce" />
                    </Slide>
                </div>
                <Slide left>
                    <div className="section3-text">
                        <p>Lorem ipsum lorem dolor</p>
                        <h1>Lorem ipsum dolor sit amet</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna
                        aliqua. Metus vulputate eu scelerisque
                        felis imperdiet proin fermentum. Praesent
                        semper feugiat nibh sed pulvinar proin
                        gravida.
                        </p>
                        <button>CTA</button>
                    </div>
                </Slide>
                
                <div className="slider">
                    <Swiper navigation={true}>
                        <SwiperSlide><img src={TV} alt="ecommerce" /></SwiperSlide>
                        <SwiperSlide><img src={Notebook} alt="ecommerce" /></SwiperSlide>
                        <SwiperSlide><img src={VideGame} alt="ecommerce" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
        </>
    )
}

export default Section3;