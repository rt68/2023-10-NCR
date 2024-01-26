const React = require('react')
class Show extends React.Component {
       render () {
        const thing = this.props.thing
        return (
            <div>
            <h1> Show Page </h1>
              <p>The {thing.name} is {thing.color}.
              {thing.happy? ' It is happy.' : ' It is not happy.' }</p>
              <a href="/things">Back to Index</a>
            </div>
         );
        }
     }
module.exports  = Show;