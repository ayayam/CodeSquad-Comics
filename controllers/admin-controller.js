const data = require('../data/data');
const {v4: uuid} = require('uuid');

module.exports = {
    admin_console: (req, res) => {
        res.render('pages/admin', {

        });
    },
    create_book: (req, res) => {
        res.render('pages/create', {
        });
        const { _id = uuid(), title, author, publisher, genre, pages, rating, synopsis } = request.body;
        data.push({_id, title, author, publisher, genre, pages, rating, synopsis});
        response.redirect('/admin-console');
    },
    update_book: (req, res) => {
        const { _id } = request.params;
        const { title, author, publisher, genre, pages, rating, synopsis } = request.body;
        const foundBook = books.find(book => book._id === String(_id));
        res.render('pages/update', {
            foundBook: foundBook,
        });
    }
}