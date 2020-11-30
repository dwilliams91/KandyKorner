import React, { useContext, useEffect, useRef } from "react"
import { EmployeeContext } from "./EmployeeProvider"

export const EmployeeForm=()=>{
    const {addEmployee}= useContext(EmployeeContext)

    const name=useRef(null)

    // const hireNewEmployee=()=>{
    //     console.log("hi")
    // }
    return(
        <form>
            <h2>Employee Form</h2>
            <input type="text" id="employeeName" ref={name} placeholder="Employee Name"> </input>
        </form>
    )


}