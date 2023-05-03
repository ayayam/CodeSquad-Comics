const data = require('../data/data');
const {v4: uuid} = require('uuid');

module.exports = {
    admin_console: (req, res) => {
        res.render('pages/admin', {
            data:data
        });
    },
    create_book: (req, res) => {
        res.render('pages/create', {
            data: data
        });
    },
    update_book: (req, res) => {
        const { _id } = request.params;
        const foundBook = data.find(book => book._id === _id)
        res.render('pages/update', {
            foundBook: foundBook
        })
    }
    //     const { _id = uuid(), title, author, publisher, genre, pages, rating, synopsis } = request.body;
    //     data.push({_id, title, author, publisher, genre, pages, rating, synopsis});
    //     res.redirect('/admin-console');
    // },
    // update_book: (req, res) => {
    //     const { _id } = request.params;
    //     const { title, author, publisher, genre, pages, rating, synopsis } = request.body;
    //     const foundBook = data.find(book => book._id === String(_id));
    //     res.render('pages/update', {
    //         foundBook: foundBook,
    //     });
    // }
}