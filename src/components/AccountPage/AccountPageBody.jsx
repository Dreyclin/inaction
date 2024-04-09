import React from "react";
import Item from "../Patterns/Item"
import img from "../../images/socials-logo/ig.svg"

export default function AccountPageBody(props) {
    return (
        <div className="account-page-body">
            <div className="container">
                <div className="circles-container blue-container"></div>
                <div className="circles-container purple-container"></div>
                <h2>Ваші дані: </h2>
                <div className="about">
                    <div className="photo-section">
                        <img src={img} alt="" />
                    </div>
                    <div className="info-section">
                        <p>Ім'я: {props.name} <a>(змінити)</a></p>
                        <p>Номер телефону: {props.tel} <a>(змінити)</a></p>
                        <p>Email: {props.email} <a>(змінити)</a></p>
                    </div>
                </div>
                <h2>Ви дивились: </h2>
                <div className="recently-watched">
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
            </div>
        </div>
    )
}