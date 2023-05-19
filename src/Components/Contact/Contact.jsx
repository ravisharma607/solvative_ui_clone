import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <>
            <div className="contactContainer">
                <div className="contactBox">
                    <div className="inTouch">
                        <div className="heading"><h2>GET IN TOUCH</h2>
                            <p>We'd love to hear from you and see how we can help.</p>
                        </div>
                        <div className="name">
                            <input type="text" name="" id="" placeholder='Your Name' />
                        </div>
                        <div className="email">
                            <input type="email" name="" id="" placeholder='Your Email' />
                        </div>
                        <div className="message">
                            <textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
                        </div>
                        <div>
                            <button className="btn">SEND MESSAGE</button>
                        </div>
                    </div>
                    <div className="support">
                        <div className="heading"><h2>SUPPORT</h2>
                            <p>Looking to discuss a project or just say hello? Here's a few ways you can reach out to us</p>
                        </div>
                        <div className="project">
                            <p>For New Projects</p>
                            <div className='flex'>
                                <span><ion-icon name="mail"></ion-icon></span>
                                <span>contact@solvative.com</span>
                            </div>
                        </div>
                        <hr />
                        <div className="supp">
                            <p>For Support</p>
                            <div className="flex">
                                <span><ion-icon name="mail"></ion-icon></span>
                                <span>support@solvative.com</span>
                            </div>
                        </div>
                        <hr />
                        <div className="solvers">
                            <p>Want to join our Team of <b>Solvers?</b></p>
                            <div className="flex">
                                <span><ion-icon name="mail"></ion-icon></span>
                                <span>careers@solvative.com</span>
                            </div>
                        </div>
                        <hr />
                        <div className="call">
                            <div className='calling'>                        <span><ion-icon name="call"></ion-icon></span></div>
                            <div className='number'>
                                <p>Or call us directly at</p>
                                <p>+1 913 871 5154</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact