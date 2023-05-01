const data = require('../data/data');

module.exports = {
    book_detail: (req, res) => {
        res.render('pages/book', {
            books: data,
            image: data.image,
            title: data.title,
            author: data.author,
            publisher: data.publisher,
            genre: data.genre,
            pages: data.pages,
            rating: data.rating,
            synopsis: data.synopsis
        });
    }
}