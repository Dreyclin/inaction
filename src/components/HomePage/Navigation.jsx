import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <nav>
            <NavLink to="/premier">Прем'єра</NavLink>
            <NavLink to="/children">Для дітей</NavLink>
            <NavLink to="/standup">Стендап шоу</NavLink>
            <NavLink to="/concerts">Концерти</NavLink>
            <NavLink to="/theater">Театр</NavLink>
            <NavLink to="/circus">Цирк</NavLink>
            <NavLink to="/vpo">Для ВПО</NavLink>
            <NavLink to="/education">Освіта</NavLink>
        </nav>
    )
}