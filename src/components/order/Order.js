import React, {useContext, useEffect} from "react"
import "./Order.css"
import {ProductContext} from "../products/ProductsProvider"

export const Order = ({ product }) => {
    console.log(product)
//     const {Products, getProducts}=useContext(ProductContext)
// // get the current user


// useEffect(()=>{
//     getProducts()
// },[])

//    const newArray=product.map(singleItem=>{
//         const singleProduct=Products.find(e=>e.id===singleItem.productId)
//     return singleProduct
//     })
//     console.log(newArray)

  return  (
    <>
    <tr className="table-row">
    <td className="tableItem">
     {product.name}
    </td>
    <td className="tableItem">
        {product.counter}
    </td>
    <td className="tableItem">
        ${product.price*product.counter}
    </td>

    </tr>
    
    </>



)}

