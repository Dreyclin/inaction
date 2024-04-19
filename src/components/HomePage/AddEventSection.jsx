import React from "react";
import dateImg from "../../images/greeting-page/date.svg"
import { NavLink } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export default function AddEventSection() {

    const [startDate, setStartDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    function handleDatePickerClick() {
        setShowDatePicker(true);
    }

    return (
        <div className="add-section">
            <div className="container">
                <div className="left-section">
                    <h1>СТВОРИ СВОЄ <span className="header-blue">ВЛАСНЕ</span> ОГОЛОШЕННЯ!</h1>
                    <NavLink to="/addevent"><button className="btn-container">ДОДАТИ ЗАХІД</button></NavLink>
                </div>
                <div className="right-section">
                    <button onClick={handleDatePickerClick}>ЗАХОДИ ЗА ДАТОЮ <i className="arrow down"></i></button>
                    {showDatePicker && (
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                        // <div className="react-datepicker-popper"></div>
                    )}
                    <div>
                        <img src={dateImg} alt="date" />
                    </div>
                </div>
            </div>
        </div>
    )
}