const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout')
class Show extends React.Component {
    render() {
        const flight = this.props.flight
        // Assuming flight.departs is a Date object. If it's a string, convert it first: new Date(flight.departs)
        const departureDate = new Date(flight.departs);

        // Calculate default arrival date to be 3 hours after departure
        const defaultArrivalDate = new Date(departureDate.getTime() + 3 * 60 * 60 * 1000); // Adds 3 hours

        // Format the defaultArrivalDate to the "datetime-local" input format (YYYY-MM-DDTHH:MM)
        const formattedDefaultArrivalDate = defaultArrivalDate.toISOString().slice(0, 16);

        const airports = ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']; // List of all possible airports
        const availableDestinations = airports.filter(airport => airport !== flight.airport); // Exclude current airport


        return (
            <DefaultLayout title="Flight Details">
                <h2>Flight Details</h2>
                <p>Airline: {flight.airline}</p>
                <p>Flight No: {flight.flightNo}</p>
                <p>Departure: {flight.departs.toLocaleString()}</p>
                <p>Airport: {flight.airport}</p>
                <h3>Destinations</h3>
                <ul>
                    {flight.destinations.map((destination, index) => (
                        <li key={index}>{destination.airport} - Arrives: {new Date(destination.arrival).toLocaleString()}</li>
                    ))}
                </ul>

                <form action={`/flights/${flight._id}/destinations?_method=PUT`} method="post">
                    <div>
                        <label htmlFor="airport">Destination Airport:</label>

                        <select id="airport" name="airport" >
                            {availableDestinations.map((airport, index) => (
                                <option key={index} value={airport}>{airport}</option>
                            ))}
                        </select>

                    </div>
                    <div>
                        <label htmlFor="arrival">Arrival Date/Time:</label>
                        <input type="datetime-local" id="arrival" name="arrival" defaultValue={formattedDefaultArrivalDate} required />
                    </div>
                    <button type="submit">Add Destination</button>
                </form>
                <a href={`/flights/${flight._id}/edit`}><button>Edit Flight Details</button></a>
                <form action={`/flights/${flight._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete" />
                </form>
            </DefaultLayout>
        );
    }
}
module.exports = Show;