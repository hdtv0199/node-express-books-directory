const express = require('express')
const mongoose = require('mongoose')
const bookRoutes = require('./routes')
const methodOverride = require('method-override')

const app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

const dbURI = 'mongodb+srv://hdtv0199:hussein0199@book-keeper.fm4qpsg.mongodb.net/book-keeper?retryWrites=true&w=majority'

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(3000)) // callback function, only going to listen for requests after the database connection is complete
    .catch(err => console.log(err))
mongoose.set('strictQuery', false);

app.use('/books', bookRoutes)

app.use(express.static('public'))