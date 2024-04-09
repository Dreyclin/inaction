import React from "react";
import img from "../../images/greeting-page/date.svg"
import timeLogo from "../../images/info-logos/Vector.svg"
import placeLogo from "../../images/info-logos/ic_outline-place.svg"
import priceLogo from "../../images/info-logos/ion_ticket-outline.svg"

export default function Item(props) {
    return (
        <div className='item'>
            <div className="event-cover-container">
                <img className="event-cover" src={img} alt="" />
            </div>
            <h3 className="event-header">Егоїстки4</h3>
            <div className="info">
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
            </div>
        </div>
    )
}