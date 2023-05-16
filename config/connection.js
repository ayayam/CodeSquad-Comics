const mongoose = require('mongoose');

// mongoose.set("strictQuery", false);


mongoose.connect('mongodb://localhost:27017/codesquadComics')
    .catch(error => console.log(error))
// , {useNewUrlParser: true, useUnifiedTopology: true})
//     .catch(error => handleError(error));

// const mongoDB = 'mongodb://localhost:27017/codesquadComics';

// main().catch((err) => console.log(err));
// async function main() {
//     await mongoose.connect(mongoDB);
// }

// mongoose.connect('mongodb://localhost:27017/codesquadComics', {useNewUrlParser: true, useUnifiedTopology: true},)
// .then(() => console.log('Connected Successfully'))
// .catch((err) => { console.error(err); });
// (err) => {
//     if(!err) {
//         console.log("Successful connection with MongoDB Server");
//     } else {
//         console.log("Error with MongoDB's connectivity");
//     }
// });