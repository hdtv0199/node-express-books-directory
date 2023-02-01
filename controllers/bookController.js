const react = require('react')
const Book = require('../models/Book')

const books_list = async (req, res) => {
    Book.find().sort({createdAt: -1}) // Sorting by timestamp created time, the -1 means descending order
        .then(result => {
            res.render('booksList', {title: 'All Books', books: result})
        }).catch(e => console.log(e))
}

const add_book = async (req, res) => {
    const book = new Book(req.body)
    await book.save()
    res.redirect('/books')
    // const book = new Book(req.body)
    // book.save()
    //     .then(() => {
    //         res.redirect('/books')
    //         res.end()
    //     }).catch(e => console.log(e))
}

const delete_book = async (req, res) => {
    await Book.findByIdAndDelete(req.params.id)
    res.redirect('/books')
    // const id = req.params.id
    // Book.findByIdAndDelete(id)
    //     .then(() => res.redirect('/books'))
    //     .catch(e => console.log(e))
}

const book_form = (req, res) => res.render('addBook')
const books_redirect = (req, res) => res.redirect('/books')

module.exports = {
    books_list,
    add_book,
    book_form,
    books_redirect,
    delete_book
}
