import React from "react";
import { NavLink } from "react-router-dom";



export default function AccountNavigation(props) {
    return(
        <div className="account-navigation">
            <NavLink to="/myevents">Мої події</NavLink>
            <NavLink to="/liked">Улюблені заходи</NavLink>
            <NavLink to="/addevent">Створити подію</NavLink>
        </div>
    )
}