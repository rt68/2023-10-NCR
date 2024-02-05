const React = require('react');

class Show extends React.Component {
    render() {
        const log = this.props.log
        
        return (
            <div>
                <h2>{log.title}</h2>
                <p>{log.entry}</p>
                <p>Ship is {log.shipIsBroken ? 'broken' : 'not broken'}.</p>
            </div>
        );
    }
}

module.exports = Show;