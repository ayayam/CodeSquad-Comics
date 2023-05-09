
const Comic = require('../models/comic-model');

module.exports = {
    index: (req, res) => {
        Comic.find({}, (error, comicSchema) => {
            if (error) {
                return error;
            } else {
                res.render('pages/index', {
                    data: comicSchema,
                });
            }
        })
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