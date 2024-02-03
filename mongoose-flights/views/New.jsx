const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout')
class New extends React.Component {
  render() {
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
            <input type="datetime-local" id="departs" name="departs" defaultValue={this.props.departsDate} />
          </div>

          <button type="submit">Submit</button>
        </form>
        </DefaultLayout>
    );
  }
}

module.exports = New;