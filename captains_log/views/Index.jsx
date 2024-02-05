const React = require('react');

class Index extends React.Component {
    render() {
        const { logs } = this.props; // Assuming logs are passed as props to this component

        return (
            <html>
                <head>
                    <title>Log Entries</title>
                </head>
                <body>
                    <h1>Log Entries</h1>
                    <ul>
                        {logs.map((log) => (
                            <li key={log._id}>
                                <h2><a href={`/logs/${log._id}`}>{log.title}</a></h2>
                                <p>{log.entry}</p>
                                <p>Ship is {log.shipIsBroken ? 'broken' : 'not broken'}.</p>
                                <a href={`/logs/${log._id}/edit`}>Edit</a> 
                                <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="Delete" />
                                </form>
                            </li>
                        ))}
                    </ul>
                    <a href="/logs/new">Add New Log Entry</a> {/* Link to the form for adding a new log */}
                </body>
            </html>
        );
    }
}

module.exports = Index;
