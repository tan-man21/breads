const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
const mongoose = require('mongoose')
main().catch(err => console.log(err));
async function main(){
    await mongoose.connect(process.env.MONGO_URI)
}

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

const methodOverride = require('method-override')
app.use(methodOverride('_method'))

app.get('/', (req, res) => {

    res.send('Welcome to an Awesome app about Breads')
});

const breadsControllers = require('./controllers/breads_controller')
app.use('/breads', breadsControllers)

app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(PORT, () =>{
    console.log(`Listening in PORT ${PORT}`)
})