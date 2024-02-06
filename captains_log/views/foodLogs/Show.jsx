const React = require('react');

class Show extends React.Component {
    render() {
        const { foodLog } = this.props; // Ensure this matches how you pass the data to the component

        return (
            <div>
                <h2>Meal on {new Date(foodLog.date).toLocaleDateString()}</h2>
                <p>Meal Type: {foodLog.mealType}</p>
                <p>Food Items: {foodLog.foodItems.join(', ')}</p>
                {foodLog.calories && <p>Calories: {foodLog.calories}</p>}
                {foodLog.notes && <p>Notes: {foodLog.notes}</p>}
                {foodLog.createdAt && <p>Created At: {new Date(foodLog.createdAt).toLocaleString()}</p>}
                {foodLog.updatedAt && <p>Updated At: {new Date(foodLog.updatedAt).toLocaleString()}</p>}
                <a href={`/foodlogs/${foodLog._id}/edit`}>Edit</a>
                <form action={`/${foodLog._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete" />
                </form>
                <a href="/foodlogs">Back to Food Logs</a>
            </div>
        );
    }
}

module.exports = Show;
