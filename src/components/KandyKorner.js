import React from "react"
import { LocationList } from "./locations/LocationsList"
import { LocationProvider } from "./locations/LocationsProvider"
import { ProductList } from "./products/ProductsList"
import { ProductProvider } from "./products/ProductsProvider"

export const KandyKorner=()=>(
<>
<LocationProvider>
    <LocationList/>
</LocationProvider>
<ProductProvider>
    <ProductList/>
</ProductProvider>
</>
)

