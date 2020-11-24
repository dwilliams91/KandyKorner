import React, {useState} from "react"

export const ProductContext=React.createContext()

export const ProductProvider=(props)=>{
    const [Products, setProducts]=useState([])
    const [ProductType, setProductTypes]=useState([])
    
    const getProducts = () => {
        return fetch("http://localhost:8088/products")
            .then(res => res.json())
            .then(setProducts)
    }
    const getProductsTypes = () => {
        return fetch("http://localhost:8088/productsTypes")
            .then(res => res.json())
            .then(setProductTypes)
    }
    return (
        <ProductContext.Provider value={{
            Products, getProducts, ProductType, getProductsTypes
        }}>
            {props.children}
        </ProductContext.Provider>
    )

}