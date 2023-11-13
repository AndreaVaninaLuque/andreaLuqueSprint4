import Layout from "../layout/Layout";
import Titulo from "../components/Titulo";
import Search from "../components/Search";
import Card from "../components/Card";
import Checkbox from "../components/Checkbox";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import eventsActions from "../store/actions/eventsActions";

function Events({ currentRoute }) {
  const events = useSelector((store) => store.events);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const dispatch = useDispatch();

  // Función para filtrar eventos según la ruta actual
  const filterEventsByRoute = (allEvents) => {
    if (currentRoute === 'upcoming') {
      return allEvents.filter((event) => event.estimate !== undefined);
    } else if (currentRoute === 'past') {
      return allEvents.filter((event) => event.assistance !== undefined);
    }
    return allEvents;
  };

  // Primer useEffect: Efecto para cargar eventos inicialmente
  useEffect(() => {
    // Llamada a la acción para cargar eventos directamente desde el estado global
    dispatch(eventsActions.get_events());
  }, [dispatch]);

  // Segundo useEffect, filtra eventos al cambiar la ruta
  useEffect(() => {
    // Filtra eventos según la ruta actual
    const allEvents = events;
    const filteredEvents = filterEventsByRoute(allEvents);
    setFilteredEvents(filteredEvents);
  }, [currentRoute, events]);

  // Maneja cambios en la selección de categorías
  const handleCategoryChange = (selectedCategories) => {
    setSelectedCategories(selectedCategories);
  };

  // Maneja cambios en la búsqueda por texto
  const handleSearch = (searchValue) => {
    setSearchValue(searchValue);
  };

  // Filtra eventos por texto y selección de categoría
  const filteredEventsList = filteredEvents.filter(
    (event) =>
      event.name.toLowerCase().includes(searchValue.toLowerCase()) &&
      (selectedCategories.length === 0 || selectedCategories.includes(event.category))
  );

  return (
    <Layout>
      <Titulo
        leftLink={currentRoute === 'home' ? '/stats' : currentRoute === 'upcoming' ? '/' : '/upcoming'}
        rightLink={currentRoute === 'home' ? '/upcoming' : currentRoute === 'upcoming' ? '/past' : '/contact'}>
        {currentRoute === 'home' ? 'Home' : currentRoute === 'upcoming' ? 'Upcoming Events' : 'Past Events'}
      </Titulo>
      <Checkbox events={events} handleCategoryChange={handleCategoryChange} />
      <Search onSearch={handleSearch} />
      <div className="cards">
        {filteredEventsList.map((event) => (
          <Card key={event._id} event={event} />
        ))}
      </div>
    </Layout>
  );
}

export default Events;