import React from "react"
import { LocationProvider } from "./locations/LocationsProvider"
import { LocationList } from "./locations/LocationsList"
import { ProductProvider } from "./products/ProductsProvider"
import { ProductList } from "./products/ProductsList"
import { Route, Router } from "react-router-dom"

export const ApplicationViews = (props) => {
    return (
        <>
        
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>
            <ProductProvider>
                <Route path="/products">
                    <ProductList />

                </Route>
            </ProductProvider>

            

        </>
    )
}