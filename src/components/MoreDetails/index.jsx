import "../MoreDetails/style.css"
import React from "react";


function MoreDetails({ event }) {
  return (
    <div>
      <p><strong>Capacity: </strong>{event.capacity || "No description available"}</p>
      <p><strong>Estimate: </strong>{event.estimate || "This event has already ended"}</p>
      <p><strong>Assistance: </strong>{event.assistance || "This event has not happened yet"}</p>
    </div>
  );
}

export default MoreDetails;