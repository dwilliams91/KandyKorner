import React from "react"
import { Route } from "react-router-dom"
import { NavBar } from "./navbar/NavBar"
import {ApplicationViews} from "./ApplicationViews"

// import "./KandyKorner.css"

export const KandyKorner = () => {
    console.log("hii!!")
    return (
    <>
    <NavBar />
    <ApplicationViews />

    </>
)
}