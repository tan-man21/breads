const React = require('react')
const Default = require('./layouts/default')

function error404() {
    return (
        <Default>
            <body>
                <h1>404 Error Occured . . .</h1>
                <p>Sorry for the inconvenience! We could not find the type of bread you were looking for. You can see a list of all our breads <a href="./">here</a>.</p>
            </body>
        </Default>
    )
}

module.exports = error404