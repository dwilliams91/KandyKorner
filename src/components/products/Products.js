import React from "react"
import "./Product.css"

export const Product=({product})=>(
    <section className="product">
        <h3 className="Product__Name">{product.name}</h3>
    <p>Type: {product.productId}</p>
    <p>Price: ${product.price}</p>


    </section>

)

