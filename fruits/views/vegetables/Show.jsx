const React = require('react')
class Show extends React.Component {
   render () {
    const vegetable = this.props.vegetable
    return (
        <div>
        <h1> Show Page </h1>
          The {vegetable.name} is {vegetable.color}.
          {vegetable.readyToEat? ' It is ready to eat.' : ' It is not ready to eat.' }
        </div>
     );
    }
 }
 module.exports  = Show;