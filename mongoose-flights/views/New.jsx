const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout')
class New extends React.Component {
  render() {
    // Ensure departsDate is a Date object. This could be passed down as a prop.
    // If this.props.departsDate is already in the correct format and timezone,
    // you might just need to format it correctly.
    let departsDateObj = new Date(this.props.departsDate);

    // Convert to local timezone manually by adjusting with the timezone offset
    let localDate = new Date(departsDateObj.getTime() - (departsDateObj.getTimezoneOffset() * 60000));

    // Format to YYYY-MM-DDTHH:MM
    // Ensuring to pad single digits where necessary
    const pad = num => num < 10 ? '0' + num : num;
    let formattedDate = localDate.getFullYear() + '-' +
      pad(localDate.getMonth() + 1) + '-' +
      pad(localDate.getDate()) + 'T' +
      pad(localDate.getHours()) + ':' +
      pad(localDate.getMinutes());

// Assuming arrival date is 2 hours after departure by default
let defaultArrivalDate = new Date(localDate.getTime() + 2 * 60 * 60 * 1000); // Adds 2 hours to departure
let formattedArrivalDate = defaultArrivalDate.getFullYear() + '-' +
  pad(defaultArrivalDate.getMonth() + 1) + '-' +
  pad(defaultArrivalDate.getDate()) + 'T' +
  pad(defaultArrivalDate.getHours()) + ':' +
  pad(defaultArrivalDate.getMinutes());

    return (
      <DefaultLayout >
        <h1>Create a New Flight</h1>
        <form action="/flights" method="post">
          <div>
            <label>Airline:</label>
            <select name="airline">
              <option value="American">American</option>
              <option value="Southwest">Southwest</option>
              <option value="United">United</option>
            </select>
          </div>
          <div>
            <label>Flight No:</label>
            <input type="number" name="flightNo" required min="10" max="9999" />
          </div>
          <div>
            <label htmlFor="departs">Departure Date/Time:</label>
            <input type="datetime-local" id="departs" name="departs" defaultValue={formattedDate} />
          </div>
          <div>
            <label htmlFor="airport">Airport:</label>
            <select id="airport" name="airport" defaultValue="SAN">
              <option value="AUS">AUS</option>
              <option value="DAL">DAL</option>
              <option value="LAX">LAX</option>
              <option value="SAN" >SAN</option>
              <option value="SEA">SEA</option>
            </select>
          </div>
          <div>
            <label htmlFor="destinationAirport">Destination Airport:</label>
            <select id="destinationAirport" name="destinationAirport">
              <option value="AUS">AUS</option>
              <option value="DAL">DAL</option>
              <option value="LAX">LAX</option>
              <option value="SAN">SAN</option>
              <option value="SEA">SEA</option>
            </select>
          </div>
          <div>
            <label htmlFor="arrival">Arrival Date/Time:</label>
            <input type="datetime-local" id="arrival" name="arrival" defaultValue={formattedArrivalDate} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = New;