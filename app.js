const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3000;
const path = require('path');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send("This route points to the Home page");
});

app.get('/about', (req, res) => {
    res.send("This route points to the About page");
});

app.get('/login', (req, res) => {
    res.send("This route points to the Login pages");
});

app.get('/admin-console', (req, res) => {
    res.send("This route points to the Admin Console page");
});

app.get('/admin-console/create-book', (req, res) => {
    res.send("This route points to the Create page")
})




app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
  });