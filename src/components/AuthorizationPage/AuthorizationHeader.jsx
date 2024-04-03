import React from "react";
import img from "../../images/logo.svg"
import { NavLink } from "react-router-dom";

export default function AuthorizationHeader() {
    return(
        <header>
        <img src={img} alt="logo" />
        <div className="questions-container">
            <span>Є питання? Дзвоніть!</span>
            <div className="phone-numbers">
                <p>+38 (066) 222 33 22</p>
                <p>+38 (066) 222 33 22</p>
            </div>
        </div>
        <button> <NavLink to="/"> <i class="fa-solid fa-arrow-right-from-bracket"></i> На головну</NavLink></button>
    </header>
    )
}