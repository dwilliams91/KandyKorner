import React from "react"
import "./Locations.css"

export const Location=({store})=>(
    <section className="locations">
        <h3 className="location__address">
            {store.address}
        </h3>


    </section>

)

