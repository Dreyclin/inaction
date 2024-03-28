import React from "react";
import Header from "../Header";
import Socials from "../Socials";
import Footer from "../Footer";
import Item from "../Item";
import { NavLink } from "react-router-dom";


export default function EventType(props) {
    return (
        <div className="category">
            <Header />
            <div className="container">
                <div className="category-header-flex">
                    <h3>Категорії: {props.category}</h3>
                    <NavLink to="/">НА ГОЛОВНУ</NavLink>
                </div>
                <Item />
            </div>
            <Socials />
            <Footer />
        </div>

    )
}