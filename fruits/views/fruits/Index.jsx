const React = require('react');
const DefaultLayout = require('../layout/Default');

class Index extends React.Component {
  render() {
    const { fruits } = this.props;
    return (
      <DefaultLayout>
        <div>
          
          {
            fruits.map((fruit, i) => (
              <article key={i}>
                <a href={`/fruits/${fruit._id}`}>
                  <h2>
                    {fruit.name} - {fruit.readyToEat ? 'Ripe' : 'Not Ripe Yuck Thats Nasty'}
                  </h2>
                </a>
              </article>
            ))
          }
          <a href="/fruits/New"><button>Create A New Fruit</button></a>
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Index;