import React from "react";
import img from "../images/date.svg"
import timeLogo from "../images/info-logos/Vector.svg"
import placeLogo from "../images/info-logos/ic_outline-place.svg"
import priceLogo from "../images/info-logos/ion_ticket-outline.svg"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function TopEventSection() {

    return (
        <div className="top-event-section">
            <div className="circles-container blue-container"></div>
            <div className="circles-container purple-container"></div>
            <div className="container">
                <h2><span className="header-blue">ТОП</span> події:</h2>
                <OwlCarousel className='owl-theme' loop margin={30} autoplay>
                    <div className='item'>
                        <img className="event-cover" src={img} alt="" />
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
                    <div className='item'>
                        <img className="event-cover" src={img} alt="" />
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
                    <div className='item'>
                        <img className="event-cover" src={img} alt="" />
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
                    <div className='item'>
                        <img className="event-cover" src={img} alt="" />
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
                </OwlCarousel>;
            </div>
        </div>
    )
}