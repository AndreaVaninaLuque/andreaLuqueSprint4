import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Tablas from "../components/Tablas";

const eventStatsMock = {
  highestAttendance: "Event1",
  lowestAttendance: "Event2",
  largestCapacity: "Event3"
};

const eventsMock = [
  { category: "Category1", price: 20, estimate: 50, capacity: 100 },
  { category: "Category2", price: 30, estimate: 70, capacity: 150 },
];

const categoriesMock = ["Category1", "Category2", "Category3"];

const upcomingEventsMock = [
  { category: "Category1", price: 20, estimate: 50, capacity: 100 },
  { category: "Category2", price: 30, estimate: 70, capacity: 150 },

];

const pastEventsMock = [
  { category: "Category1", price: 20, assistance: 80, capacity: 100 },
  { category: "Category2", price: 30, assistance: 60, capacity: 150 },
];

describe('<Tablas />', () => {
  test('Se debería renderizar correctamente el componente', () => {
    render(<Tablas eventStats={eventStatsMock} events={eventsMock} categories={categoriesMock} upcomingEvents={upcomingEventsMock} pastEvents={pastEventsMock} />);
    const eventStatisticsTable = screen.getByText('Events statistics');
    const upcomingEventsTable = screen.getByText('Upcoming Events statistics by category');
    const pastEventsTable = screen.getByText('Past Events statistics by category');

    expect(eventStatisticsTable).toBeInTheDocument();
    expect(upcomingEventsTable).toBeInTheDocument();
    expect(pastEventsTable).toBeInTheDocument();
  });

});
