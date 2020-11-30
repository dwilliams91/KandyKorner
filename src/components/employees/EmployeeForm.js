import React, { useContext, useEffect, useRef } from "react"
import { LocationContext } from "../locations/LocationsProvider"
import { EmployeeContext } from "./EmployeeProvider"

export const EmployeeForm = (props) => {
    console.log("is this working??")
    const { addEmployee } = useContext(EmployeeContext)
    const { Location, getLocations } = useContext(LocationContext)

    const name = useRef(null)
    const location = useRef(null)
    const manager = useRef(null)
    const fullTime = useRef(null)
    const hourly = useRef(null)

    useEffect(() => {
        getLocations()
    }, [])
    const hireNewEmployee = () => {
        const locationId = parseInt(location.current.value)
        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addEmployee({
                name: name.current.value,
                manager: manager.current.value,
                fullTime: fullTime.current.value,
                hourly: hourly.current.value,
                locationId,
            })
                .then(() => props.history.push("/employees"))
        }
    }

    return (
        <>
        <form className="employeeForm">
            <h2>Employee Form</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Employee Name</label>
                    <input type="text" id="employeeName" ref={name} required autoFocus className="form-control" placeholder="Employee name" />

                </div>

            </fieldset>

        </form>
        </>
    )


}