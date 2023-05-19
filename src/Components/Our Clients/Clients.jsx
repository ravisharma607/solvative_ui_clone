import React from 'react'
import './Clients.css'
import ClientsAPI from './ClientsAPI'

const Clients = () => {
    function scaleIcon(){
        document.querySelector('.btn #arrow').classList.add('active')
    }
    function removeScaleIcon(){
        document.querySelector('.btn #arrow').classList.remove('active')
    }
    return (
        
        <>
            <div className="clientsBox">
                <div className="heading">
                    <h2>OUR CLIENTS DO BIG THINGS WITH A LITTLE HELP FROM US.</h2>
                    <p>If you like success stories, we've got plenty to share. Here are two, but be sure to check out our Case Studies tab to see more.</p>
                </div>
                <div className="clientsCards">
                    {
                        ClientsAPI.map((e,index)=>{
                            return <div className="cards" key={index}>
                            <div className="mainImg">
                                <img src={e.img} alt="" />
                            </div>
                            <div className="miniImg">
                                <img src={e.miniImg} alt="" />
                            </div>
                            <div className="desc">
                                <a href="#">{e.para} <strong>We solved it</strong></a>
                                <button className="action" onMouseEnter={scaleIcon} onMouseLeave={removeScaleIcon}>READ MORE <span id='arrow'><ion-icon name="arrow-forward"></ion-icon></span></button>
                            </div>
                        </div>
                        })
                    }

                </div>
<button className="btn" onMouseEnter={scaleIcon} onMouseLeave={removeScaleIcon}>View all case studies <span id='arrow'><ion-icon name="arrow-forward"></ion-icon></span></button>
</div>

        </>
    )
}

export default Clients