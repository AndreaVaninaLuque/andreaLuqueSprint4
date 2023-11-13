import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../layout/Layout";
import MoreDetails from "../components/MoreDetails";
import eventsActions from "../store/actions/eventsActions";

function Details() {
  const [event, setEvent] = useState(null);
  const { _id } = useParams();
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events);

  // Función para cargar detalles del evento desde el estado global
  const fetchEventData = async () => {
    try {
      // Disparar la acción para obtener los eventos
      await dispatch(eventsActions.get_events());

      // Obtener los eventos del estado global
      const eventsData = events;

      // Buscar el evento por el _id proporcionado en los parámetros
      const selectedEvent = eventsData.find((event) => event._id == _id);
      console.log("Selected event:", selectedEvent);
      setEvent(selectedEvent);
    } catch (error) {
      console.error("Error loading details", error);
    }
  };

  useEffect(() => {
    fetchEventData();
  }, [_id, dispatch, events]);

  return (
    <Layout>
      {event ? (
        <div className="card">
          <img className="img-details" src={event.image || "No image available"} />
          <div className="card-info">
            <h1><strong>{event.name || "No name available"}</strong></h1>
            <p><strong>Description: </strong>{event.description || "No description available"}</p>
            <p><strong>Category: </strong>{event.category || "No Category available"}</p>
            <p><strong>Place: </strong>{event.place || "No place available"}</p>
            <p><strong>Date: </strong>{event.date || "No date available"}</p>
            <p><strong>Price: </strong>€{event.price || "No price available"}</p>
            <MoreDetails event={event} />
          </div>
        </div>
      ) : (
        <div>
          <h1>Details</h1>
          <p>No event found</p>
        </div>
      )}
    </Layout>
  );
}

export default Details;