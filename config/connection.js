const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.DB_URL;

// Connect to your Atlas cluster
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("Successfully connected to Atlas");

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);

// const mongoose = require('mongoose');

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

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect(process.env.DB_URL)
//   console.log("connected to MongoDB");
// };

// async function main() {
//   await mongoose.connect(process.env.DB_URL, {useNewUrlParser: true})
//   .then(() => console.log('Connected!'));
// }

