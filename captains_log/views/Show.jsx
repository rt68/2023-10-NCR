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
          <a href="/logs">Back to Log Entries</a>
            </div>
        );
    }
}

module.exports = Show;