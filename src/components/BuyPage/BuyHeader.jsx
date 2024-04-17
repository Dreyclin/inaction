import React from "react";
import { NavLink } from "react-router-dom";

export default function BuyHeader() {
    return (
        <div className="container">
            <div className="buy-header">
                <h2>Як придбати?</h2>
                <NavLink to="/">НА ГОЛОВНУ</NavLink>
            </div>
            <p className="buy-header-about">Сайт <span className="header-blue">InAction</span> створений для інформування енергійної громади Запоріжжя про заходи у місті.
                Купити квитки ви можете наступними способами:</p>
        </div>
    )
}