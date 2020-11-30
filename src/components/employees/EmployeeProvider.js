import React, {useState} from "react"

export const EmployeeContext=React.createContext()

export const EmployeeProvider=(props)=>{
    const [Employees, setEmployee]=useState([])

    const getEmployees = () => {
        return fetch("http://localhost:8088/employees")
            .then(res => res.json())
            .then(setEmployee)
    }
    const addEmployee=employee=>{
        return fetch("http://localhost:8088/employees",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        })
        .then(getEmployees)
    }

    return (
        <EmployeeContext.Provider value={{
            Employees, getEmployees, addEmployee
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )

}