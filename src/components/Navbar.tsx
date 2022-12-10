import {NavLink} from "react-router-dom";
import React from "react";
import './Navbar.css'

export const Navbar = () => {
    return(
        <div className="nav-bar">
            <NavLink className="nav-link" to=''> Главная </NavLink>
            <NavLink className="nav-link" to='/books'> Библиотека Эл. Пособий </NavLink>
            <NavLink className="nav-link" to='/books/add'> Добавить Эл. Пособие </NavLink>
        </div>
    )
}