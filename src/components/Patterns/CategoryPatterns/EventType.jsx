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
                    <h3><span className="header-blue">{props.header}</span>{props.subtitle}</h3>
                    <NavLink to="/">НА ГОЛОВНУ</NavLink>
                </div>
                <div className="category-item-flex">
                    <Item category = {props.subtitle}/>
                    <Item category = {props.subtitle}/>
                    <Item category = {props.subtitle}/>
                    <Item category = {props.subtitle}/>
                    <Item category = {props.subtitle}/>
                    <Item category = {props.subtitle}/>
                    <Item category = {props.subtitle}/>
                    <Item category = {props.subtitle}/>
                    <Item category = {props.subtitle}/>
                    <Item category = {props.subtitle}/>
                    <Item category = {props.subtitle}/>
                    <Item category = {props.subtitle}/>
                    <Item category = {props.subtitle}/>
                    <Item category = {props.subtitle}/>
                    <Item category = {props.subtitle}/>
                    <Item category = {props.subtitle}/>
                    <Item category = {props.subtitle}/>
                    <Item category = {props.subtitle}/>
                </div>
                <div className="text-center">
                    <button className="show-more-btn">ПОКАЗАТИ ЩЕ</button>
                </div>
            </div>
            <Socials />
            <Footer />
        </div>

    )
}