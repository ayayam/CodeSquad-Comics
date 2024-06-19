const mongoose = require('mongoose');

// mongoose.set("strictQuery", false);

// mongoose.connect('mongodb://localhost:27017/codesquadComics')
//     .catch(error => console.log(error))

// mongoose.connect(process.env.DB_URL)
//     .catch(error => console.log(error));

// const connectDatabase = async() => {
//     try {
//         await mongoose.connect('mongodb://localhost:27017/codesquadComics');

//         console.log("connected to MongoDB");
//     } catch (error) {
//         console.log(error);
//     }
// };

// connectDatabase();

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_URL).then(() => console.log('Connected!'));
}

// :)
// random comment
// random comment 2