import React from "react"
import { LocationList } from "./locations/LocationsList"
import { LocationProvider } from "./locations/LocationsProvider"

export const KandyKorner=()=>(
<>
<LocationProvider>
    <LocationList/>
</LocationProvider>
</>
)

