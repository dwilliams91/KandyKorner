import React, { useContext, useEffect } from "react"
import "./Product.css"
import { CustomerProductsContext } from "../order/OrderProvider"


export const Product = ({ product }) => {

    const {addCustomerProducts } = useContext(CustomerProductsContext)
    

    const addToCart = (product) => {
        const user = parseInt(localStorage.getItem("kandy_customer"))
        const itemToAddToCart = {
            customerId: user,
            productId: product.id

        }
        // console.log(itemToAddToCart)
        addCustomerProducts(itemToAddToCart)
    }

    return (


        <section className="product">
            <h3 className="Product__Name">{product.name}</h3>
            <p>Type: {product.productId}</p>
            <p>Price: ${product.price}</p>
            <button id={`candy--` + product.name} onClick={event => addToCart(product)}> Add to Cart </button>

        </section>

    )
}



