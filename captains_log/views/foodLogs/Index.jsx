const React = require('react');

class Index extends React.Component {
    render() {
        const { foodLogs } = this.props; // Assuming foodLogs are passed as props to this component

        return (
            <html>
                <head>
                    <title>Food Log Entries</title>
                </head>
                <body>
                    <h1>Food Log Entries</h1>
                    <ul>
                        {foodLogs.map((foodLog) => (
                            <li key={foodLog._id}>
                                <h2><a href={`/foodlogs/${foodLog._id}`}>Meal on {new Date(foodLog.date).toLocaleDateString()}</a></h2>
                                <p>Meal Type: {foodLog.mealType}</p>
                                <p>Food Items: {foodLog.foodItems.join(', ')}</p>
                                {foodLog.calories && <p>Calories: {foodLog.calories}</p>}
                                {foodLog.notes && <p>Notes: {foodLog.notes}</p>}
                                <a href={`/foodlogs/${foodLog._id}/edit`}>Edit</a>
                                <form action={`/foodlogs/${foodLog._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="Delete" />
                                </form>
                            </li>
                        ))}
                    </ul>
                    <a href="/foodlogs/new">Add New Food Log Entry</a> {/* Link to the form for adding a new food log */}
                </body>
            </html>
        );
    }
}

module.exports = Index;
