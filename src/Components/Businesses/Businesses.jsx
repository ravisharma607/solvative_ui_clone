import React, { useState, useEffect } from 'react'
import './Businesses.css'
import BusinessesApi from './BusinessesApi'
const Businesses = ({ autoplayInterval = 5000 }) => {



    let autoplayTimer = null;
    const [activeIndex, setActiveIndex] = useState(0);

    const goToPreviousSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? BusinessesApi.length - 1 : prevIndex - 1));
    };

    const goToNextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === BusinessesApi.length - 1 ? 1 : prevIndex + 1));
    };
    const getTranslateValue = () => {
        const cardWidth = 100 / BusinessesApi.length;
        return `translateX(-${activeIndex * cardWidth}%)`;
    };

    const startAutoplay = () => {
      stopAutoplay();
      autoplayTimer = setInterval(goToNextSlide, autoplayInterval);
    };

    const stopAutoplay = () => {
      clearInterval(autoplayTimer);
    };

    useEffect(() => {

      startAutoplay();

      return () => {
        stopAutoplay();
      };
    }, [BusinessesApi]); 


    return (
        <>
            <div className="container">
                <div className="heading">
                    <h2>SOME OF THE GREAT BUSINESSES WE'VE HELPED.</h2>
                </div>
                <div className="allBrands">
                <div className="brands" style={{ transform: getTranslateValue() }}>
                    {
                        BusinessesApi.map((e, index) => {
                            return <img src={e.src} alt="" key={index}/>
                        })
                    }
                </div>
                    <div className="move">
                        <div className="left">
                            <span onClick={goToPreviousSlide}>&#60;  </span>
                        </div>
                        <div className="right">
                            <span onClick={goToNextSlide}>&#62;</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Businesses