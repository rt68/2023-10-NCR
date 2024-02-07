const React = require('react');
const DefautLayout = require('../layout/Default');

class Signup extends React.Component {
    render() {
        return (
            <DefautLayout>
                <form action="/users/signup" method="post">
                    <fieldset>
                        <legend>New User</legend>
                        <label htmlFor="username">USERNAME:  </label>
                        <input type="text" name="username" required /> 
                        <label htmlFor="password">PASSWORD: </label>
                        <input type="password" name="password" required />
                       
                        <input type="submit" value="Create Account" />
                    </fieldset>
                </form>
            </DefautLayout>
        )
    }
}
module.exports = Signup;