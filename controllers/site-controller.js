
const Comics = require('../models/comic-model');

module.exports = {
    index: (req, res) => {
        Comics.find({})
            .then((comics) => {
                res.render('pages/index', {
                   comics: comics
                });
            })
            .catch((err) => {
                console.log(err);
            })
    },
    about: (req, res) => {
        res.render('pages/about')
    },
    login: (req, res) => {
        res.render('pages/login')
    }
}