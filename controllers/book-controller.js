
// const {v4: uuid} = require('uuid');
const Comics = require('../models/comic-model');

module.exports = {
    book_detail: (req, res) => {
        const {_id}  = req.params;
        Comics.findOne({_id: _id})
            .then((books) => {
                res.render('pages/book', {
                   books: books 
                })
            })
            .catch((err) => {
                console.log(err);
            })
    },
    create_book_post: (req, res) => {
        const { title, author, publisher, genre, pages, rating, synopsis } = req.body;
        const newComic = new Comics ({
            title: title,
            author: author,
            publisher: publisher,
            genre: genre,
            pages: pages,
            rating: rating,
            synopsis: synopsis
        });

        newComic.save();

        res.redirect('/admin-console');
    },
    book_update_put: (req, res) => {
        const {_id} = req.params;
        const {title, author, publisher, genre, pages, rating, synopsis} = req.body; //form itself
        Book.findByIdAndUpdate(_id, {$set: {
            title: title,
            author: author,
            publisher: publisher,
            genre: genre,
            rating: rating,
            synopsis: synopsis
        }}, {new: true}, error => {
            if (error) {
                return error;
            } else {
                res.redirect('/admin-console'); 
            }
        })  
    },
    book_delete: (req, res) => {
        const { _id } = req.params;
        Comic.deleteOne({_id: _id})
            .then()
        // , error => {
        //     if (error) {
        //         return error;
        //     } else {
        //         res.redirect('/admin-console');
        //     }
        // })
    }
}