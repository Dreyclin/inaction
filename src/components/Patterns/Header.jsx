import React from "react";
import img from "../../images/logo.svg"
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <img src={img} alt="logo" />
            <div className="input-container">
                <input type="text" name="search" placeholder="Пошук..." />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <button><NavLink to="/auth"> <i className="fa-regular fa-user"></i> Вхід</NavLink></button>
        </header>
    )
}