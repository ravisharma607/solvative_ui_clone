import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <>
            <div className="footerContainer">
                <div className="footer">
                    <div className="header">
                        <div className="heading">
                            <p>solving forward since <b>2010.</b></p>
                        </div>
                        <div className="links">
                            <div>
                                <span><ion-icon name="mail"></ion-icon></span>
                                <span>contact@solvative.com</span>
                            </div>
                            <div >
                                <span><ion-icon name="mail"></ion-icon></span>
                                <span>careers@solvative.com</span>
                            </div>
                            <div>
                                <span><ion-icon name="call"></ion-icon></span>
                                <span>+1 913 871 5154</span>
                            </div>
                            <div className="socialMedias">
                            <a><ion-icon name="logo-twitter"></ion-icon></a>
                            <a><ion-icon name="logo-facebook"></ion-icon></a>
                            <a><ion-icon name="logo-instagram"></ion-icon></a>
                            <a><ion-icon name="logo-linkedin"></ion-icon></a>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="bottom">
                        <div className="column">
                            <div className="heading">
                                <h2>Dallas</h2>
                            </div>
                            <p>5752 Grandscape Blvd, Suite 225,</p>
                            <p>The Colony, TX 75056.</p>
                        </div>
                        <div className="column">
                            <div className="heading">
                                <h2>Kansas City</h2>
                            </div>
                            <p>9393 West 110th Street, Suite 500,</p>
                            <p>Overland Park, KS 66210.</p>
                        </div>
                        <div className="column">
                            <div className="heading">
                                <h2>Adelaide, Australia</h2>
                            </div>
                            <p>Unit 2 - 84 Grange Road,</p>
                            <p>WELLAND, SA 5007.</p>
                        </div>
                        <div className="column">
                            <div className="heading">
                                <h2>Ahmedabad</h2>
                            </div>
                            <p>602, 3rd Eye Vision, IIM Road,</p>
                            <p>Ahmedabad, Gujarat 380015.</p>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>&copy; Copyright <span>Solvative&reg; LLC 2023</span>. Solvative&reg; and solve Forward&reg; are registered trademarks of Solvative LLC.| <span>Privacy Policy</span></p>
                </div>
            </div>
        </>
    )
}

export default Footer