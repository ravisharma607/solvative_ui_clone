import React, { useState, useEffect} from 'react'
import left from './Img/left.svg'
import right from './Img/right.svg'
import './SolveForward.css'
import SolveForwardAPI from './SolveForwardAPI';

const SolveForward = ({autoplayInterval = 5000}) => {
  let autoplayTimer = null;
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPreviousSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? SolveForwardAPI.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === SolveForwardAPI.length - 1 ? 0 : prevIndex + 1));
  };
  const getTranslateValue = () => {
    const cardWidth = 100 / SolveForwardAPI.length;
    return `translateX(-${activeIndex * cardWidth}%)`;
  };

  const startAutoplay = () => {
    stopAutoplay(); // Stop existing autoplay timer if any
    autoplayTimer = setInterval(goToNextSlide, autoplayInterval);
  };

  const stopAutoplay = () => {
    clearInterval(autoplayTimer);
  };

  useEffect(() => {
    let autoplayTimer = null;

    startAutoplay();

    return () => {
      stopAutoplay();
    };
  }, [SolveForwardAPI]); // Run effect only once on component mount




  return (
    <>
<div className="solversForwardContainer">
<div className="solversHeading">
            <h2>LET'S SOLVE FORWARD®</h2>
            <p>Solve Forward® is a journal of learned lessons and experiences from the digital transformation frontlines by the Solvative Team. Follow along at <a href=''>SolveForward.com</a></p>
          </div>
        <div className="SolversContainer">
          <div className="solversCards" id='solversCards' style={{ transform: getTranslateValue() }}>
            {
              SolveForwardAPI.map((e, index) => {
                return <div key={index} className={`cards ${index === activeIndex ? 'active' : ''}`}>
                  <div><img src={e.src} alt="" />
                    <p className='date'>{e.date}</p>
                    <h2 className="cardsHeading">{e.heading}</h2>
                    <p>{e.para} <a href="#">Read More</a> </p></div>
                </div>
              })
            }
          </div>
          <div className="action">
            <div className="LeftactionBtns" onClick={goToPreviousSlide}>
              <img src={left} alt="" className='prev-btn' />
            </div>
            <div className="RightactionBtns" onClick={goToNextSlide}>
              <img src={right} alt="" className='next-btn' />
            </div>
          </div>
        </div>
</div>
    </>
  )
}
export default SolveForward