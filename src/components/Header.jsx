import React from "react";
import img from "../images/logo.svg"

export default function Header() {
    return (
        <header>
            <img src={img} alt="logo" />
            <div class="input-container">
                <input type="text" name="search" placeholder="Пошук..." />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <button> <i class="fa-regular fa-user"></i> Вхід</button>
        </header>
    )
}