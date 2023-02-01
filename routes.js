const express = require('express')

const bookController = require('./controllers/bookController')

const router = express.Router()

router.get('/', bookController.books_list)
router.get('/book-form', bookController.book_form)
router.post('/', bookController.add_book)
router.get('/', bookController.books_redirect)
router.delete('/:id', bookController.delete_book)

module.exports = router