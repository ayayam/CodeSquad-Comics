const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book-controller');


router.route('/:_id')
    .get(bookController.book_detail)

module.exports = router;