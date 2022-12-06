import {NavLink} from "react-router-dom";
import React from "react";
import './Navbar.css'

export const Navbar = () => {
    return(
        <div className="nav-bar">
            <NavLink className="nav-link" to='/books'> Книги </NavLink>
            <NavLink className="nav-link" to='/books/add'> Добавить </NavLink>
        </div>
    )
}