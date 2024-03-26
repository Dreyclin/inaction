import React from "react";
import dateImg from "../images/greeting-page/date.svg"

export default function AddEventSection() {
    return (
        <div className="add-section">
            <div className="container">
                <div className="left-section">
                    <h1>СТВОРИ СВОЄ <span className="header-blue">ВЛАСНЕ</span> ОГОЛОШЕННЯ!</h1>
                    <button className="btn-container">ДОДАТИ ЗАХІД</button>
                </div>
                <div className="right-section">
                    <button>ЗАХОДИ ЗА ДАТОЮ <i className="arrow down"></i></button>
                    <div>
                        <img src={dateImg} alt="date" />
                    </div>
                </div>
            </div>
        </div>
    )
}