const data = require('../data/data');
const {v4: uuid} = require('uuid');

module.exports = {
    book_detail: (req, res) => {
        // const { _id } = req.params;
        let id = req.params._id;
        // console.log(_id);
        const comicbook = data.find(book => book._id === String(id));
        console.log(comicbook);
        res.render('pages/book', {
            books: comicbook,
        });
    },
    create_book_post: (req, res) => {
        const { _id=uuid(), title, author, publisher, genre, pages, rating, synopsis } = req.body;
        data.push({_id, title, author, publisher, genre, pages, rating, synopsis});
        res.redirect('/admin-console');
    },
    book_update_put: (req, res) => {
        const {_id} = req.params;
        const {title, author, publisher, genre, pages, rating, synopsis} = req.body; //form itself
        const foundBook = data.find(book => book._id === String(_id));

        foundBook.title = title;
        foundBook.author = author;
        foundBook.publisher = publisher;
        foundBook.genre = genre;
        foundBook.pages = pages;
        foundBook.rating = rating;
        foundBook.synopsis = synopsis

        res.redirect('/admin-console'); 
        
    },
    book_delete: (req, res) => {
        const { _id } = req.params;
        const foundBook = data.find(book => book._id === String(_id));
        const index = data.indexOf(foundBook);
        data.splice(index, 1);
        res.redirect('/admin-console');
    }
}