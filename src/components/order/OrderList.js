import React, { useContext, useEffect } from "react"
import { CustomerProductsContext } from "./OrderProvider"
import {ProductContext} from "../products/ProductsProvider"
import {Order} from "./Order"

export const OrderList=(props)=>{

const user=parseInt(localStorage.getItem("kandy_customer"))
console.log(user)

const {CustomerProducts, getCustomerProducts}= useContext(CustomerProductsContext)
const {Products, getProducts}=useContext(ProductContext)
// get the current user


useEffect(()=>{
    getProducts()
    .then(getCustomerProducts)

},[])

// const listOfMyCart=CustomerProducts.filter(singleCustomerProduct=>user.id===singleCustomerProduct.customerId)
// const finalArray=listOfMyCart.map(singleItem=>{
//      const relatedItem=Products.find(e=>e.id===singleItem.productId)
//      return

// })

return (
    <>
    <div className="products">
        {
            CustomerProducts.filter(singleCustomerProduct=>user===singleCustomerProduct.customerId)
            .map(singleItem=>{
                
             const singleProduct=Products.find(e=>e.id===singleItem.productId)
            
             return <Order key={singleProduct.id} product={singleProduct}/>
            })
        
        }
            
            
        </div>

    </>
)

}