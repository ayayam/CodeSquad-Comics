// const data = require('../data/data');
const Comic = require('../models/comic-model');
// const {v4: uuid} = require('uuid');

module.exports = {
    admin_console: (req, res) => {
        Comic.find() 
            .then(data => {
                res.render('pages/admin', {
                    data: data
                });
            })
            .catch((err) => {
                console.log(err);
            })
    },


    create_book: (req, res) => {
        res.render('pages/create', {
        });
    },
    update_book: (req, res) => {
        const { _id } = req.params;
        Comic.findOne({_id: _id})
            .then(foundBook => {
                res.render('pages/update', {
                    foundBook: foundBook
                })
            })
            .catch(error => {
                console.log(error);
            })
    }
}