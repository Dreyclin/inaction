import React from "react";
import img from "../images/logo.svg"

export default function Header() {
    return (
        <header>
            <img src={img} alt="logo" />
            <div className="input-container">
                <input type="text" name="search" placeholder="Пошук..." />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <button> <i className="fa-regular fa-user"></i> Вхід</button>
        </header>
    )
}