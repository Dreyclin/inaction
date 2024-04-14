import React from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function EventHeader() {
    
    const { category } = useParams();
    
    return (
        <div className="event-page-header">
            <h3><span className="header-blue">Категорії: </span>{category}</h3>
            <NavLink to="/">НА ГОЛОВНУ</NavLink>
        </div>
    )
}