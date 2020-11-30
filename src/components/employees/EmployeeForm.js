import React, { useContext, useEffect, useRef } from "react"
import { LocationContext } from "../locations/LocationsProvider"
import { EmployeeContext } from "./EmployeeProvider"

export const EmployeeForm = (props) => {
    console.log("is this working??")
    const { addEmployee } = useContext(EmployeeContext)
    const { Locations, getLocations } = useContext(LocationContext)

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
                    <label htmlFor="employeeName">Employee Name</label>
                    <input type="text" id="employeeName" ref={name} required autoFocus className="form-control" placeholder="Employee name" />
            </fieldset>
            <fieldset>
                <label> Store </label>
                <select defaultValue="" name="location" ref={location}>
                    <option value="0">Select a location</option>
                    {Locations.map(singleLocation=>(
                        <option key={singleLocation.id} value={singleLocation.id} >{singleLocation.address}</option>
                    ))
                    }
                </select>
            </fieldset>
            <fieldset>
                <label>manager</label>
                <select defaultValue="" name="manager" ref={manager}>
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                </select>
            </fieldset>
            <fieldset>
                <label>Full Time  </label>
                <select defaultValue="" name="fullTime" ref={fullTime}>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
            </fieldset>
            <fieldset>   
                    <label>Hourly Rate</label>
                    <input type="text" id="employeeRate" ref={hourly} className="form-control" placeholder="Hourly Rate" />
            </fieldset>
            <button type="submit" onClick={event=>{
                event.preventDefault()
                hireNewEmployee()
            }}>

            </button>

        </form>
        </>
    )


}