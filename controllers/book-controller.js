const data = require('../data/data');
const {v4: uuid} = require('uuid');

module.exports = {
    book_detail: (req, res) => {
        // const { _id } = req.params;
        let id = req.params._id;
        // console.log(_id);
        const comicbook = data.find(book => book._id === String(id));
        console.log(comicbook);
        res.render('pages/book', {
            books: comicbook,
        });
    },

}