const data = require('../data/data');

module.exports = {
    admin_console: (req, res) => {
        res.render('pages/admin', {

        });
    },
    create_book: (req, res) => {
        res.render('pages/create', {

        });
    },
    update_book: (req, res) => {
        res.render('pages/update', {

        });
    }
}