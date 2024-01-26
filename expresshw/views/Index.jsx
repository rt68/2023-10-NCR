const React = require('react');

class Index extends React.Component {
  render() {
    const { things } = this.props;
    return (
      <div>
      <h1>Things Index Page</h1>
      {/* <nav>
        <a href="/fruits/new">Create new fruit</a>
      </nav> */}
      <ul>
          {things.map((thing, i) => {
              return (
                  <li key={i}>
                      The{' '}
                      <a href={`/things/${i}`}>
                          {thing.name}
                      </a>{' '}
                      is {thing.color}. <br></br>
                      {thing.happy
                          ? `It is happy.`
                          : `It is not happy.`}
                      <br />
                  </li>
              );
          })}
      </ul>
  </div>
    );
  }
}

module.exports = Index;
