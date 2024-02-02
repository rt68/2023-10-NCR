const React = require('react');
// As you can see we are using the app layout
const DefaultLayout = require('../layout/Default')

class Edit extends React.Component {
  render() {
    const { fruit } = this.props;
    return (
      <DefaultLayout>
        <div>
          <form action={`/fruits/${fruit._id}?_method=PUT`} method="post">
            <fieldset>
              <legend>Edit a Fruit</legend>
              <label htmlFor="name">NAME:</label>
              <input type="text" name="name" placeholder="enter fruit name" 
              defaultValue={fruit.name}/>

              <label htmlFor="color"> COLOR:</label>
              <input type="text" name="color" placeholder="enter fruit name"
              defaultValue={fruit.color} />

              <label htmlFor="readyToEat"> READY TO EAT:</label>
              {
                fruit.readyToEat?
                <input type="checkbox" name="readyToEat" 
                defaultChecked />:
                <input type="checkbox" name="readyToEat" />
              }
              
            </fieldset>
            <input type="submit" value={`Edit ${fruit.name}`} />
          </form>
        </div>
      </DefaultLayout>
    )
  }
}
module.exports = Edit;