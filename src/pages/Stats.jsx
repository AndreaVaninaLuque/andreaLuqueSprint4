import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../layout/Layout";
import Titulo from "../components/Titulo";
import Tablas from "../components/Tablas";
import eventsActions from "../store/actions/eventsActions";

// Funciones para calcular las estadísticas
const calculateHighestAttendance = (events) => {
  let accumulator = 0;
  let title = "";

  events.forEach((event) => {
    let number = (event.assistance / event.capacity) * 100;

    if (number > accumulator) {
      accumulator = number;
      title = event.name;
    }
  });

  return `The event with the highest attendance is ${title} with ${accumulator.toFixed(2)}% attendance`;
};

const calculateLowestAttendance = (events) => {
  let accumulator = 100;
  let title = "";

  events.forEach((event) => {
    let number = (event.assistance / event.capacity) * 100;

    if (number < accumulator) {
      accumulator = number;
      title = event.name;
    }
  });

  return `The event with the lowest attendance is ${title} with ${accumulator}% attendance`;
};

const calculateLargestCapacity = (events) => {
  let accumulator = 0;
  let title = "";

  events.forEach((event) => {
    if (event.capacity > accumulator) {
      accumulator = event.capacity;
      title = event.name;
    }
  });

  return `The event with the highest capacity is ${title} with a capacity of ${accumulator}`;
};

function Stats() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events);

  // Función para cargar eventos desde el estado global
  const fetchEventData = async () => {
    try {
      // Disparar la acción para obtener los eventos
      await dispatch(eventsActions.get_events());
    } catch (error) {
      console.error("Error loading events", error);
    }
  };

  useEffect(() => {
    fetchEventData();
  }, [dispatch]);

  const eventsData = events;
  const upcomingEventsData = eventsData.filter((event) => event.estimate !== undefined);
  const pastEventsData = eventsData.filter((event) => event.assistance !== undefined);
  const distinctCategories = Array.from(new Set(eventsData.map((event) => event.category)));

  // Calcula las estadísticas
  const highestAttendance = calculateHighestAttendance(eventsData);
  const lowestAttendance = calculateLowestAttendance(eventsData);
  const largestCapacity = calculateLargestCapacity(eventsData);

  return (
    <Layout>
      <Titulo leftLink={'/contact'} rightLink={'/'}>
        Stats
      </Titulo>
      <Tablas
        eventStats={{
          highestAttendance,
          lowestAttendance,
          largestCapacity,
        }}
        events={eventsData}
        categories={distinctCategories}
        upcomingEvents={upcomingEventsData}
        pastEvents={pastEventsData}
      />
    </Layout>
  );
}

export default Stats;