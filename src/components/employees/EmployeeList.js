import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import {LocationContext} from "../locations/LocationsProvider"

export const EmployeeList=(props)=>{
    const {Employees, getEmployees}= useContext(EmployeeContext)
    const {Locations, getLocations}=useContext(LocationContext)

    useEffect(()=>{
        getLocations()
            .then(getEmployees)
    },[])
    return(
        <>
        <h2>Employees</h2>
        <button onClick={()=>props.history.push("/employees/hire")}>
            Add Employee
        </button>
        </>

    )


}