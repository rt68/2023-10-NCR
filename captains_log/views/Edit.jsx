const React = require('react');
const DefaultLayout = require('./layout/DefaultLayout')
class Edit extends React.Component {
  render() {
    const { log } = this.props;
    return (
      <DefaultLayout>
      <html>
        <head>
          <title>Edit Log Entry</title>
        </head>
        <body>
          <h1>Edit Log Entry</h1>
          <form action={`/logs/${log._id}?_method=PUT`} method="POST">
            <div>
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" name="title" defaultValue={log.title} required />
            </div>
            <div>
              <label htmlFor="entry">Entry:</label>
              <textarea id="entry" name="entry" defaultValue={log.entry} required></textarea>
            </div>
            <div>
              <label htmlFor="shipIsBroken">Ship is broken</label>
              <input type="checkbox" id="shipIsBroken" name="shipIsBroken" defaultChecked={log.shipIsBroken} />
            </div>
            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
          <a href="/logs">Back to Log Entries</a>
        </body>
      </html>
      </DefaultLayout>
    );
  }
}

module.exports = Edit;

