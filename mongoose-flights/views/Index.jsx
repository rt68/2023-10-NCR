const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout')
class Index extends React.Component {
  render() {
    const { flights } = this.props;
    if (!flights || flights.length === 0) {
      return (
        <DefaultLayout title="All Flights">
          <h1>All Flights</h1>
          <p>No flights are available at the moment.</p>

        </DefaultLayout>
      );
    }

    return (
      <DefaultLayout title="All Flights">
        <h1>All Flights</h1>
        <ul>
          {flights.map(flight => (
            <li key={flight._id} className={new Date(flight.departs) < new Date() ? 'past' : ''}>

              Airline: {flight.airline}, Flight No: {flight.flightNo}, Departs: {new Date(flight.departs).toLocaleString()}
              <a href={`/flights/${flight._id}`}>View Details</a>
            </li>
          ))}
        </ul>
        <a href="/flights/new" ><button>Add New Flight</button></a>
      </DefaultLayout>
    );
  }
}

module.exports = Index;