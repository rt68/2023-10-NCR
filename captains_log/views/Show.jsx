const React = require('react');

class Show extends React.Component {
    render() {
        const { log } = this.props;

        return (
            <div>
                <h2>{log.title}</h2>
                <p>{log.entry}</p>
                <p>Ship is {log.shipIsBroken ? 'broken' : 'not broken'}.</p>
                {log.createdAt && <p>Created At: {new Date(log.createdAt).toLocaleString()}</p>}
                {log.updatedAt && <p>Updated At: {new Date(log.updatedAt).toLocaleString()}</p>}
                <a href={`/logs/${log._id}/edit`}>Edit</a>
                <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete" />
                </form>
                <a href="/logs">Back to Log Entries</a>
                
            </div>
        );
    }
}

module.exports = Show;