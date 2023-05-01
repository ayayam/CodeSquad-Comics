const data = require('../data/data');

module.exports = {
    index: (req, res) => {
        res.render('pages/index', {
            image: data.image,
            title: data.title,
            author: data.author,
            rating: data.rating,
            books: data,
        });
    },
    about: (req, res) => {
        res.render('pages/about', {

        });
    },
    login: (req, res) => {
        res.render('pages/login', {

        });
    }
}