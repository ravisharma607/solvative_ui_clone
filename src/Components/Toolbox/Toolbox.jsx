import React from 'react'
import './Toolbox.css'
import getData from './CardsAPI'

const Toolbox = () => {
    return (
        <div className="toolBox">
            <div className="toolBox_heading">
                <h2>SEE WHAT'S IN OUR TOOLBOX.</h2>
                <p>What does it mean to Solve Forward®? It's about taking your business to the next level and beyond. Our solutions address the here and now—and position you for what's coming. That's the secret to future proofing. Our highly skilled team solves for the human experience unique to your business using the latest platforms, all to elevate the way your people do their jobs—and the way customers engage with you. If it can advance your business, it's in the Solvative toolbox. </p>
                <p>That's how we Solve Forward®.</p>
            </div>
            <div className="toolBox_boxes">
                <div className="cardBox">
                    {
                        getData.map((e,index) => {
                            return <div className="cards" key={index}>
                            <img src={e.src} alt="" />
                            <h3>{e.heading}</h3>
                            <div className="topics">  
                            <p>{e.first}</p>
                            <p>{e.second}</p>
                            <p>{e.third}</p>
                            <p>{e.fourth}</p>
                            </div>
                        </div>

                        })

                    }
                </div>
            </div>
        </div>
    )
}
{/* <p>wow</p>
<p>User Interviews</p>
<p>Design</p>
<p> Mockup Design</p> */}
export default Toolbox