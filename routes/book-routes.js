const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book-controller');
    
router.route('/:id')
    .get(bookController.book_detail)

// app.get('/book/:id', (req, res) => {
//     let params = req.params;
//     res.render(`pages/book`, {

//     });
// });