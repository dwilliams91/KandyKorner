import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductsProvider"
import {Product} from "./Products"

export const ProductList=()=>{
    const {Products, getProducts}=useContext(ProductContext)

    useEffect(()=>{
        getProducts()},[])

    return (
        <div className="products">
            {
                Products.map(singleProduct=><Product key={singleProduct.id} product={singleProduct}/> )
            }
        </div>

        
    )
}