import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const get_events = createAsyncThunk("get_events", async () => {

    try {
//Devolver un array
       let events = await axios.get("/src/data/data.json")
      .then((response) => {
        return response.data.events;
        // const allEvents = response.data.events;
        // let filteredEvents = allEvents;

        // // Filtra eventos según la ruta actual
        // if (currentRoute === 'upcoming') {
        //   filteredEvents = allEvents.filter((event) => event.estimate !== undefined);
        // } else if (currentRoute === 'past') {
        //   filteredEvents = allEvents.filter((event) => event.assistance !== undefined);
        // }
      })

      return events
     
    } catch (e) {
        console.log(e);
    }
});

const eventsActions = { get_events }

export default eventsActions;