const React = require('react');

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <style>
                        {`
      body { font-family: Arial, sans-serif; background: skyblue; color: purple; }
      nav { background: pink; padding: 15px; }
      nav a { margin-right: 15px; text-decoration: none; }
      nav a:hover { text-decoration: underline; }
      .past { color: red; }
      button { color: purple; background: pink; border: none; border-radius: 8px; padding: 10px; }
      button:hover { border-radius: 15px; padding: 15px; }

      }
    `}
                    </style>
                </head>

                <body>
                    <nav>
                        <a href="/flights">ALL FLIGHTS</a> | <a href="/flights/new">ADD FLIGHT</a>
                    </nav>
                    {this.props.children}
                </body>
            </html>
        );
    }
}

module.exports = DefaultLayout;
