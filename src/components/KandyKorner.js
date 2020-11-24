import React from "react"
import { ApplicationViews } from "./ApplicationViews"
import { LocationList } from "./locations/LocationsList"
import { LocationProvider } from "./locations/LocationsProvider"
import { NavBar } from "./navbar/NavBar"
import { ProductList } from "./products/ProductsList"
import { ProductProvider } from "./products/ProductsProvider"

export const KandyKorner=()=>(
    <>
    <NavBar />
    <ApplicationViews />
</>
)