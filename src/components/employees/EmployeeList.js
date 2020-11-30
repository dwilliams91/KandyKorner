import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import {LocationContext} from "../locations/LocationsProvider"

export const EmployeeList=()=>{
    const {Employees, getEmployees}= useContext(EmployeeContext)
    const {Locations, getLocations}=useContext(LocationContext)

    useEffect(()=>{
        getLocations()
            .then(getEmployees)
    },[])
    return(
        <>
        <h2>Employees</h2>
        </>

    )


}