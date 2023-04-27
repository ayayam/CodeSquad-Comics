const data = require('../data/data');

module.exports = {
    book_detail: (req, res) => {
        res.render('pages/book', {
            data: data,
        });
    }
}