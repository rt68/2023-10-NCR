const React = require('react');
const DefaultLayout = require('../layout/Default');

class Index extends React.Component {
  render(){
    const { fruits } = this.props;
    return (
      <DefaultLayout title={"Fruits Index Page"}>
        <nav>
          <a href="/fruits/new">Create a New Fruit</a>
        </nav>
        <ul>
          {
            fruits.map((fruit)=>{
              return (
                <li key={fruit._id}>
                  The <a href={`/fruits/${fruit._id}`}>{fruit.name}</a>
                  {' '}is {fruit.color} <br/>
                  {
                    fruit.readyToEat?
                    '  It is ready to eat':
                    '  It is not ready to eat'
                  }
                  <br />
                  <form action={`/fruits/${fruit._id}?_method=DELETE`} method="POST">
                          <input type="submit" value="DELETE"/>
                      </form>
                      <a href={`/fruits/${fruit._id}/edit`}>Edit This Fruit</a>
                </li>
              )
            })
          }
        </ul>
      </DefaultLayout>
    )
  }
}

module.exports = Index;