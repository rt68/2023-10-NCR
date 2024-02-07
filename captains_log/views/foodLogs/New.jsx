const React = require('react');

class New extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>New Food Log Entry</title>
        </head>
        <body>
          <h1>New Food Log Entry</h1>
          <form action="/foodlogs" method="POST">
            <div>
              <label htmlFor="date">Date:</label>
              <input type="date" id="date" name="date" required />
            </div>
            <div>
              <label htmlFor="mealType">Meal Type:</label>
              <select id="mealType" name="mealType" required>
                <option value="">Select a Meal Type</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snack">Snack</option>
              </select>
            </div>
            <div>
              <label htmlFor="foodItems">Food Items:</label>
              <input type="text" id="foodItems" name="foodItems" placeholder="List items separated by commas" required />
            </div>
            <div>
              <label htmlFor="calories">Calories:</label>
              <input type="number" id="calories" name="calories" placeholder="Calories (optional)" />
            </div>
            <div>
              <label htmlFor="notes">Notes:</label>
              <textarea id="notes" name="notes" placeholder="Notes about the meal (optional)"></textarea>
            </div>
            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
          <a href="/foodlogs">Back to Food Logs</a>
        </body>
      </html>
    );
  }
}

module.exports = New;
