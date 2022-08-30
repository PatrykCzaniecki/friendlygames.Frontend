import React from "react";
import { useLocation } from "react-router-dom"
import { useJsApiLoader } from "@react-google-maps/api"
import Map from "../components/Map.js";


export default function EventPage(){
    //do ukrycia
    const { isLoaded } = useJsApiLoader({googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY})
    const event = useLocation().state

    return (
        <div className="eventPage">
            <div className="eventPage--div">
                <h1 className="event--header">{event.name}</h1>
                <div className="event--info">
                    <h3>{event.eventCategory.name}</h3>
                    <h3>{event.startDate}/{event.endDate}</h3>
                    <h3>{event.levelCategory.name}</h3>
                    <h3>{event.surfaceCategory.name}</h3>
                    <h3>{event.surroundingCategory.name}</h3>
                    <h3>{event.playersNeeded}</h3>
                    <h3>{event.price}</h3>
                </div>
                <div className="event--mapInfo">
                    <h3>{event.location.street}, {event.location.postalCode} {event.location.city}</h3>
                    <div className="event--map">
                        {isLoaded && <Map location={event.location} />}
                    </div>
                </div>
            </div>
        </div>
    )
}