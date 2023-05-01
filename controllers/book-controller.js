const data = require('../data/data');
const {v4: uuid} = require('uuid');

module.exports = {
    book_detail: (req, res) => {
        const { _id } = req.params;
        console.log(_id);
        const comicbook = data.filter(book => book.id === String(_id));
        console.log(comicbook);
        res.render('pages/book', {
            books: comicbook,
            // books: data,
            // image: data.image,
            // title: data.title,
            // author: data.author,
            // publisher: data.publisher,
            // genre: data.genre,
            // pages: data.pages,
            // rating: data.rating,
            // synopsis: data.synopsis
        });
    },

}