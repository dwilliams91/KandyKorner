import React, {useContext,useEffect} from "react"
import {LocationContext} from "./LocationsProvider"
import {Location} from "./Locations"
import "./Locations.css"

export const LocationList=()=>{
    const {Locations, getLocations}=useContext(LocationContext)

    useEffect(()=>{
        getLocations()
    },[])

    return (
        <div className="locations">
            {console.log(Locations)}
                {
                    Locations.map(singleLocation=> <Location key={singleLocation.id} store={singleLocation} />)
                }
        </div>
    )

}