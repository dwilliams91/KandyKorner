import React, {useState} from "react"
import { Product } from "../products/Products"

export const CustomerProductsContext=React.createContext()

export const CustomerProductsProvider=(props)=>{
    const [CustomerProducts, setCustomerProducts]=useState([])
    
    const getCustomerProducts = () => {
        return fetch("http://localhost:8088/customerProducts")
            .then(res => res.json())
            .then(setCustomerProducts)
    }
    
    const addCustomerProducts=product=>{
        return fetch("http://localhost:8088/CustomerProducts",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        })
        .then(getCustomerProducts)
    }
    return (
        <CustomerProductsContext.Provider value={{
            CustomerProducts, getCustomerProducts, addCustomerProducts
        }}>
            {props.children}
        </CustomerProductsContext.Provider>
    )

}