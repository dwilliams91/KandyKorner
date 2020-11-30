import React, {useState} from "react"

export const CustomerProductsContext=React.createContext()

export const CustomerProductsProvider=(props)=>{
    const [CustomerProducts, setCustomerProducts]=useState([])
    
    const getCustomerProducts = () => {
        return fetch("http://localhost:8088/customerProducts")
            .then(res => res.json())
            .then(setCustomerProducts)
    }
    
    return (
        <CustomerProductsContext.Provider value={{
            CustomerProducts, getCustomerProducts
        }}>
            {props.children}
        </CustomerProductsContext.Provider>
    )

}