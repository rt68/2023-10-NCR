const React = require('react');
const DefautLayout = require('./layout/Default');

class Home extends React.Component {
    render() {
        return (
            <DefautLayout>
                <a href="/users/signup"><button>Sign up</button></a>
                <a href="/users/login"><button>Log in</button></a>
            </DefautLayout>
        )
    }
}
module.exports = Home;