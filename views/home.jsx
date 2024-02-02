const React = require('react')
const Default = require('./layouts/default')

function Home() {
    return(
        <Default>
            <main>
                <h1>BreadCRUD HomePage</h1>
            </main>
        </Default>
    )
}

module.exports = Home