const React = require('react');

class Index extends React.Component {
  render() {
      const { vegetables } = this.props;
      return (
              <div>
                  <h1>Vegetables Index Page</h1>
                  <nav>
                    <a href="/vegetables/new">Create new vegetable</a>
                  </nav>
                  <ul>
                      {vegetables.map((vegetable) => {
                          return (
                              <li key={vegetable._id}>
                                  The{' '}
                                  <a href={`/vegetables/${vegetable._id}`}>
                                      {vegetable.name}
                                  </a>{' '}
                                  is {vegetable.color}. <br></br>
                                  {vegetable.readyToEat
                                      ? `It is ready to eat.`
                                      : `It is not ready to eat.`}
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