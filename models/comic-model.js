const mongoose = require('mongoose');
const {Schema} = mongoose;

const comicSchema = new Schema({
    title: {
        type: String,
        required: [true, "Please enter a title"],
        minlength: [1, "Please enter at least 1 character"]
    }, 
    author: {
        type: String,
        required: [true, "Please enter the author's name"],
        minlength: [1, "Please enter at least 1 character"]
    }, 
    publisher: {
        type: String,
    }, 
    genre: {
        type: String,
    },
    pages: { 
        type: Number,
    },
    rating: {
        type: Number,
        min: [1, "Please rate from 1 to 5"],
        max: [5, "Please rate from 1 to 5"]
    },
    synopsis: {
       type: String, 
    }, 
    image: {
        type: String
    }
})

const Comics = mongoose.model('Comics', comicSchema);

async function runComics() {
    await mongoose.connect(`4{process.env.DB_URL}`)
    mongoose.model('Comics', comicSchema);
    await mongoose.model('Comics').findOne();
}

runComics();

module.exports = Comics;