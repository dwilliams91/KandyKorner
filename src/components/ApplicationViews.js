import React from "react"
import { LocationProvider } from "./locations/LocationsProvider"
import { LocationList } from "./locations/LocationsList"
import { ProductProvider } from "./products/ProductsProvider"
import { ProductList } from "./products/ProductsList"
import { Route, Router } from "react-router-dom"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeForm } from "./employees/EmployeeForm"

export const ApplicationViews = (props) => {
    return (
        <>

            <LocationProvider>
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>
            <ProductProvider>
                <Route path="/products">
                    <ProductList />

                </Route>
            </ProductProvider>
            <LocationProvider>
                <EmployeeProvider>
                    <Route exact path="/employees" render={props => <EmployeeList {...props} />}>
                    </Route>
                    <Route exact path="/employees/hire" render={props => <EmployeeForm {...props} />}>
                    </Route>
                </EmployeeProvider>

            </LocationProvider>



        </>
    )
}