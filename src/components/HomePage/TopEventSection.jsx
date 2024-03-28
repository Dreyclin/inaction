import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Item from "../Patterns/Item";

export default function TopEventSection() {

    return (
        <div className="top-event-section">
            <div className="circles-container blue-container"></div>
            <div className="circles-container purple-container"></div>
            <div className="container">
                <h2><span className="header-blue">ТОП</span> події:</h2>
                <OwlCarousel className='owl-theme' loop margin={30} autoplay>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </OwlCarousel>;
            </div>
        </div>
    )
}