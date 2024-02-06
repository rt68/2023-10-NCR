const React = require('react');

class Edit extends React.Component {
  render() {
    const { foodLog } = this.props; // Ensure this matches how you pass the data to the component
    return (
      <html>
        <head>
          <title>Edit Food Log Entry</title>
        </head>
        <body>
          <h1>Edit Food Log Entry</h1>
          <form action={`/foodlogs/${foodLog._id}?_method=PUT`} method="POST">
            <div>
              <label htmlFor="date">Date:</label>
              <input type="date" id="date" name="date" defaultValue={foodLog.date.toISOString().split('T')[0]} required />
            </div>
            <div>
              <label htmlFor="mealType">Meal Type:</label>
              <select id="mealType" name="mealType" defaultValue={foodLog.mealType} required>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snack">Snack</option>
              </select>
            </div>
            <div>
              <label htmlFor="foodItems">Food Items:</label>
              <input type="text" id="foodItems" name="foodItems" defaultValue={foodLog.foodItems.join(', ')} required />
              <small>Separate items with commas</small>
            </div>
            <div>
              <label htmlFor="calories">Calories:</label>
              <input type="number" id="calories" name="calories" defaultValue={foodLog.calories} />
            </div>
            <div>
              <label htmlFor="notes">Notes:</label>
              <textarea id="notes" name="notes" defaultValue={foodLog.notes}></textarea>
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

module.exports = Edit;
