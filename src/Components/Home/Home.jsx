import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import BgVideo from './BgVideo'
const Home = () => {

    function scaleIcon() {
        document.querySelector('.btn #arrow').classList.add('active')
    }
    function removeScaleIcon() {
        document.querySelector('.btn #arrow').classList.remove('active')
    }
    return (
        <>
            <Navbar />
            <section className='home'>
                <BgVideo />
                <div className="homeContainer">
                    <div className="box">
                        <div className="homeContainerHeading">
                            <h1>innovation made</h1>
                            <h2>human .</h2>
                        </div>
                        <div className="homeContainerPara">
                            <p>Here's the thing. We could design an impressive digital solution with all the bells and whistles, but if it doesn't feel right to the person using it - if it doesn't speak to their user experience or make jobs easier - we might as well hang up our whiteboards.</p>
                        </div>
                        <button className="btn" onMouseEnter={scaleIcon} onMouseLeave={removeScaleIcon}>let's talk <span id='arrow'><ion-icon name="arrow-forward"></ion-icon></span></button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home