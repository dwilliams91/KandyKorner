import React, { useContext, useEffect } from "react"
import { CustomerProductsContext } from "./OrderProvider"
import {ProductContext} from "../products/ProductsProvider"
import {Order} from "./Order"

export const OrderList=(props)=>{

const user=parseInt(localStorage.getItem("kandy_customer"))
// console.log(user)

const {CustomerProducts, getCustomerProducts}= useContext(CustomerProductsContext)
const {Products, getProducts}=useContext(ProductContext)
// get the current user


useEffect(()=>{
    getProducts()
    .then(getCustomerProducts)

},[])

const filterFunction=(myArray)=>{
    let onlyMyProducts=myArray.filter(singleCustomerProduct=>user===singleCustomerProduct.customerId)
    console.log(onlyMyProducts)
    let arrayOfId=onlyMyProducts.map(singleProduct=>{
       return singleProduct.productId
    })
    console.log(arrayOfId)
 
}

return (
    <>
    <div>
        <table>
            <tbody>
                
                {
            CustomerProducts.filter(singleCustomerProduct=>user===singleCustomerProduct.customerId)
            .map(singleItem=>{

                const singleProduct=Products.find(e=>e.id===singleItem.productId)
            
             return <Order key={singleProduct.id} product={singleProduct}/>
            })
        
        }


                
            </tbody>
        </table>
    
        <button onClick={event => filterFunction(CustomerProducts)}> Add to Cart </button>        
        </div>

    </>
)

}