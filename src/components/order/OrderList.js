import React, { useContext, useEffect } from "react"
import { CustomerProductsContext } from "./OrderProvider"
import { ProductContext } from "../products/ProductsProvider"
import { Order } from "./Order"

export const OrderList = (props) => {

    const user = parseInt(localStorage.getItem("kandy_customer"))
    // console.log(user)

    const { CustomerProducts, getCustomerProducts } = useContext(CustomerProductsContext)
    const { Products, getProducts } = useContext(ProductContext)
    // get the current user


    useEffect(() => {
        getProducts()
            .then(getCustomerProducts)

    }, [])

    // go through the array and for each item  
    // go through the array again 
    // check to see if the first item's productId matches any of the items again. 
    // check to see if the index of the matches line up. 
    // if they have the same productId and they don't have the same index, then...
    // create a new array for which every object has a counter variable and only appears once


    const filterFunction = (myArray) => {
        let onlyMyProducts = myArray.filter(singleCustomerProduct => user === singleCustomerProduct.customerId)
        const finalArray=[]
  
        const newArray=onlyMyProducts.map(singleProduct=>{
            // return an array 
            const foundObj=finalArray.find(e=>e.name===singleProduct.product.name)
            if (foundObj){
                return foundObj.counter++
            } else{
                const newItem={
                    name:singleProduct.product.name,
                    price: singleProduct.product.price,
                    counter:1
                }
                finalArray.push(newItem)
            }

            // console.log(singleProduct)

           
            return singleProduct
        })
        console.log(finalArray)
        // COOL WAY TO DO IT
        // const reducedArray=onlyMyProducts.reduce((acc, cv)=>{
        //     // return an array 
        //     const foundObj=acc.find(e=>e.name===cv.product.name)
        //     if (foundObj){
        //         foundObj.counter++
        //     } else{
        //         const newItem={
        //             name:cv.product.name,
        //             price: cv.product.price,
        //             counter:1
        //         }
        //         acc.push(newItem)
        //     }
        //     return acc
        // },[])
        // console.log(reducedArray)
            
   
        return finalArray

    }

    

    return (
        <>
            <div>
                <table>
                    <tbody>

                        {
                            filterFunction(CustomerProducts).map(singleItem=>{
                                console.log(singleItem)
                                return <Order key={singleItem} product={singleItem}/> 
                            })

                                    
                        }



                    </tbody>
                </table>

                <button onClick={event => filterFunction(CustomerProducts)}> checkout </button>
            </div>

        </>
    )

}