const React = require('react');
const DefaultLayout = require('./layout/DefaultLayout')
class New extends React.Component {
  render() {
    return (
      <DefaultLayout>
      <html>
        <head>
          <title>New Log Entry</title>
        </head>
        <body>
          <h1>New Log Entry</h1>
          <form action="/logs" method="POST">
            <div>
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" name="title" required />
            </div>
            <div>
              <label htmlFor="entry">Entry:</label>
              <textarea id="entry" name="entry" required></textarea>
            </div>
            <div>
              <input type="checkbox" id="shipIsBroken" name="shipIsBroken" />
              <label htmlFor="shipIsBroken">Ship is broken</label>
            </div>
            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </body>
      </html>
      </DefaultLayout>
    );
  }
}

module.exports = New;
