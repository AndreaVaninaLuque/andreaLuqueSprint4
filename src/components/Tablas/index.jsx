import React from 'react';
import './style.css';

function Tablas({ eventStats, events, categories, upcomingEvents, pastEvents }) {
  const calculateTotal = (category, eventsData, field) => {
    const categoryEvents = eventsData.filter(event => event.category === category);
    return categoryEvents.reduce((total, event) => total + (event[field] || 0), 0);
  };

  const calculatePercentage = (category, eventsData, field) => {
    const totalField = calculateTotal(category, eventsData, field);
    const totalCapacity = calculateTotal(category, eventsData, 'capacity');

    if (totalCapacity === 0) {
      return 0;
    }

    const percentage = (totalField / totalCapacity) * 100;
    return percentage.toFixed(2);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Events statistics</th>
          </tr>
          <tr>
            <td><strong>Events with the highest percentage of attendance</strong></td>
            <td><strong>Events with the lowest percentage of attendance</strong></td>
            <td><strong>Event with larger capacity</strong></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{eventStats.highestAttendance}</td>
            <td>{eventStats.lowestAttendance}</td>
            <td>{eventStats.largestCapacity}</td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>Upcoming Events statistics by category</th>
          </tr>
          <tr>
            <td><strong>Categories</strong></td>
            <td><strong>Revenues</strong></td>
            <td><strong>Percentage of attendance</strong></td>
          </tr>
        </thead>
        <tbody>
          {categories .filter(category => upcomingEvents.some(event => event.category === category))
            .sort()
            .map(category => (
              <tr key={category}>
                <td>{category}</td>
                <td>€{calculateTotal(category, upcomingEvents, 'price')}</td>
                <td>{calculatePercentage(category, upcomingEvents, 'estimate')}%</td>
              </tr>
            ))}
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>Past Events statistics by category</th>
          </tr>
          <tr>
            <td><strong>Categories</strong></td>
            <td><strong>Revenues</strong></td>
            <td><strong>Percentage of attendance</strong></td>
          </tr>
        </thead>
        <tbody>
          {categories
            .filter(category => pastEvents.some(event => event.category === category))
            .sort()
            .map(category => (
              <tr key={category}>
                <td>{category}</td>
                <td>€{calculateTotal(category, pastEvents, 'price')}</td>
                <td>{calculatePercentage(category, pastEvents, 'assistance')}%</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default Tablas;