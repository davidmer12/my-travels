import React from "react";

import "./Travel.css";

const Travel = props => {

    return (
        <div>
            <p>{props.destination}</p>
            <p>{props.country}</p>
            <img src={props.image} alt=""></img>
            <p>{props.distance}</p>
        </div>
    )
}



export default Travel;