import React from "react";
import { NavLink } from "react-router-dom";

export default function AddEventHeader() {
    return (
        <div className="add-event-header">
            <div className="container">
                <h3>ДОДАТИ СВОЮ ПОДІЮ</h3>
                <NavLink to="/">НА ГОЛОВНУ</NavLink>
            </div>
        </div>
    )
}