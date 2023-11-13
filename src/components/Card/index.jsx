import React from "react";
import "./style.css"
import { Link } from "react-router-dom";


const Card = ({event}) => {

    return(
        <>
        <div className='card-container'>
            <img className='img-card'src={event.image ? event.image: "There is no image"} />
            <h6>{event.category ? `Category: ${event.category}` : "There is no category"}</h6>
            <h4>{event.name ? event.name: "There is no name"}</h4>
            <p> {event.description ? event.description: "There is no description"}</p>
            <p className="price">{event.price ? `Price: €${event.price}` : "There is no price"}</p>
            <Link to={`/details/${event._id}`} className="btn btn-card">Details</Link>
        </div>
        </>
    );
}
export default Card;