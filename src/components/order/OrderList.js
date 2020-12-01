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
    // 

    const filterFunction = (myArray) => {
        let onlyMyProducts = myArray.filter(singleCustomerProduct => user === singleCustomerProduct.customerId)
        console.log(onlyMyProducts)
        // go through the array
        let dublicateItems = onlyMyProducts.map(singleProduct => {
            
            let goingThroughTheListAgain = onlyMyProducts.filter(checkProductId => {
                return singleProduct.productId === checkProductId.productId && onlyMyProducts.indexOf(singleProduct) !== onlyMyProducts.indexOf(checkProductId)
            })
            return goingThroughTheListAgain
        })
        console.log(dublicateItems)
    }



    return (
        <>
            <div>
                <table>
                    <tbody>

                        {
                            CustomerProducts.filter(singleCustomerProduct => user === singleCustomerProduct.customerId)
                                .map(singleItem => {

                                    const singleProduct = Products.find(e => e.id === singleItem.productId)

                                    return <Order key={singleProduct.id} product={singleProduct} />
                                })

                        }



                    </tbody>
                </table>

                <button onClick={event => filterFunction(CustomerProducts)}> Add to Cart </button>
            </div>

        </>
    )

}