import React from "react";
import ig from "../../images/socials-logo/ig.svg"
import tg from "../../images/socials-logo/tg.svg"
import phone from "../../images/socials-logo/phone.svg"


export default function Socials() {
    return (
        <div className="socials-section">
            <div className="container">
                <div className="social-flex">
                    <div className="socials">
                        <div className="header-container btn-container">
                            <h4>НАШІ СОЦ.МЕРЕЖІ:</h4>
                        </div>
                        <div className="socials-container">
                            <div className="social-item item">
                                <img className="social-logo logo" src={ig} alt="" />
                                <span className="social-name name">inaction.project.zp</span>
                            </div>
                            <div className="social-item item">
                                <img className="social-logo logo" src={tg} alt="" />
                                <span className="social-name name">@inaction.project.zp</span>
                            </div>
                        </div>
                    </div>
                    <div className="hotline">
                        <div className="header-container btn-container hotline-header-container">
                            <h4>Є ПИТАННЯ?</h4>
                        </div>
                        <div className="hotline-container">
                            <div className="number-item item">
                                <img src={phone} alt="" className="number-logo logo" />
                                <span className="number-name name">+38 (066) 222 33 22</span>
                            </div>
                            <div className="number-item item">
                                <img src={phone} alt="" className="number-logo logo" />
                                <span className="number-name name">+38 (066) 222 33 22</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}