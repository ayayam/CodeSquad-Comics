// const data = require('../data/data');
const Comic = require('../models/comic-model');
// const {v4: uuid} = require('uuid');

module.exports = {
    admin_console: (req, res) => {
        Comic.find({}, (error, comicSchema) => {
            if (error) {
                return error;
            } else {
                res.render('pages/admin', {
                    data: comicSchema
                });
            }
        })
    },
    create_book: (req, res) => {
        res.render('pages/create', {
            data: data
        });
    },
    update_book: (req, res) => {
        const { _id } = req.params;
        Comic.findOne({_id: _id}, (error, comicSchema) => {
            if (error) {
                return error;
            } else {
                res.render('pages/update', {
                    foundBook: comicSchema
                })
            }
        })
    }
}