import React from "react";
import timeLogo from "../../images/info-logos/Vector.svg"
import placeLogo from "../../images/info-logos/ic_outline-place.svg"
import priceLogo from "../../images/info-logos/ion_ticket-outline.svg"
import { NavLink } from "react-router-dom";

export default function EventPageBody() {
    return (
            <div className="event-page-body">
                <div className="left-section">
                    <div className="event-logo-container">
                        <img src="" alt="event-logo" />
                    </div>
                    <span>Організатор: назва</span>
                </div>
                <div className="right-section">
                    <h2>Test</h2>
                    <div className="info-item">
                        <img className="info-image" src={timeLogo} alt="" />
                        <span className="info-text">Test</span>
                    </div>
                    <div className="info-item">
                        <img className="info-image" src={placeLogo} alt="" />
                        <span className="info-text">Test</span>
                    </div>
                    <div className="info-item">
                        <img className="info-image" src={priceLogo} alt="" />
                        <span className="info-price info-text">Test</span>
                    </div>
                    <button>ПЕРЕЙТИ ДО ДЖЕРЕЛА</button>
                    <NavLink to="/howtobuy">Як придбати?</NavLink>
                </div>
            </div>
    )
}