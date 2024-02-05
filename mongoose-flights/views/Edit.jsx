const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout');

class Edit extends React.Component {
  render() {
    // Assuming this.props.flight contains the flight data to be edited
    const { flight } = this.props;
    // Format departure date for the datetime-local input
    const formattedDepartureDate = flight.departs.toISOString().slice(0, 16);

    return (
      <DefaultLayout>
        <h1>Edit Flight</h1>
        <form action={`/flights/${flight._id}?_method=PUT`} method="post">
          <div>
            <label>Airline:</label>
            <select name="airline" defaultValue={flight.airline}>
              <option value="American">American</option>
              <option value="Southwest">Southwest</option>
              <option value="United">United</option>
            </select>
          </div>
          <div>
            <label>Flight No:</label>
            <input type="number" name="flightNo" required min="10" max="9999" defaultValue={flight.flightNo} />
          </div>
          <div>
            <label htmlFor="departs">Departure Date/Time:</label>
            <input type="datetime-local" id="departs" name="departs" defaultValue={formattedDepartureDate} />
          </div>
          <div>
            <label htmlFor="airport">Departure Airport:</label>
            <select id="airport" name="airport" defaultValue={flight.airport}>
              <option value="AUS">AUS</option>
              <option value="DAL">DAL</option>
              <option value="LAX">LAX</option>
              <option value="SAN">SAN</option>
              <option value="SEA">SEA</option>
            </select>
          </div>
          
          {flight.destinations.map((destination, index) => (
            <div key={index}>
              <label htmlFor={`destinationAirport-${index}`}>Destination Airport:</label>
              <select id={`destinationAirport-${index}`} name={`destinations[${index}][airport]`} defaultValue={destination.airport}>
                <option value="AUS">AUS</option>
                <option value="DAL">DAL</option>
                <option value="LAX">LAX</option>
                <option value="SAN">SAN</option>
                <option value="SEA">SEA</option>
              </select>
              <label htmlFor={`arrival-${index}`}>Arrival Date/Time:</label>
              <input type="datetime-local" id={`arrival-${index}`} name={`destinations[${index}][arrival]`} defaultValue={destination.arrival.toISOString().slice(0, 16)} />
            </div>
          ))}
          <button type="submit">Update Flight</button>
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = Edit;
