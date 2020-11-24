import React from "react"
import {Link} from "react-router-dom"
import "./NavBar.css"

export const NavBar=(props)=>{
    return (
        <ul className="navbar">
            <li className="navBar__item active">
                <Link className="navbar__Link" to="/"> Stores</Link>

            </li>
            <li className="navBar__item active">
                <Link className="navbar__Link" to="/products"> products</Link>
            </li>


        </ul>

    )

}