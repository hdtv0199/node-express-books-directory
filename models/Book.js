const mongoose = require('mongoose')

const schema = mongoose.Schema

const bookSchema = new schema({
    title:{
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book
