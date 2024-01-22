const express = require('express')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()

app.get('/', (req, res) => {

    res.send('Welcome to an Awesome app about Breads')
});

const breadsControllers = require('./controllers/breads_controller')
app.use('/breads', breadsControllers)

app.listen(PORT, () =>{
    console.log(`Listening in PORT ${PORT}`)
})