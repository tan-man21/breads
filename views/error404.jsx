const React = require('react')
const Default = require('./layouts/default')
const { text } = require('express')

function error404() {
    return (
        <Default>
            <body>
                <h1 style={{textAlign: "center"}}>404 Error Occured . . .</h1>
                <p style={{textAlign: "center"}}>Sorry for the inconvenience! We could not find the page you were looking for. You can see a list of all our breads <a href="/breads">here</a>.</p>
            </body>
        </Default>
    )
}

module.exports = error404