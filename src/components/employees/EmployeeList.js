import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import {LocationContext} from "../locations/LocationsProvider"
import { Employee } from "./Employee"


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
        <div className="employees">

                {
                    Employees.map(singleEmployee => {
                        const clinic = Locations.find(singleLocation => singleLocation.id === singleEmployee.locationId)
                        return <Employee key={singleEmployee.id}
                            location={clinic}
                            employee={singleEmployee} />

                    })
                }
            </div>
        </>

    )


}