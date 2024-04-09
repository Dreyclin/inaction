import React from "react";
import { NavLink } from "react-router-dom";

export default function AddEventHeader(props) {
    return (
        <div className="add-event-header">
            <div className="container">
                <h3>{props.title}</h3>
                <NavLink to="/">НА ГОЛОВНУ</NavLink>
            </div>
        </div>
    )
}