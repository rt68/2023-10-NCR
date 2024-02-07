const React = require('react');
const DefautLayout = require('../layout/Default');

class Login extends React.Component {
    render() {
        return (
            <DefautLayout>
                <form action="/users/login" method="post">
                    <fieldset>
                        <legend>User Login</legend>
                        <label htmlFor="username">USERNAME: </label>
                        <input type="text" name="username" required />

                        <label htmlFor="password">PASSWORD: </label>
                        <input type="password" name="password" required />

                        <input type="submit" value="Login" />
                    </fieldset>
                </form>
            </DefautLayout>
        )
    }
}
module.exports = Login;