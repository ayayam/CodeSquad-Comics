const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3000;
const path = require('path');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.render('pages/index', {

    });
});

app.get('/about', (req, res) => {
    res.render('pages/about', {

    });
});

app.get('/login', (req, res) => {
    res.render('pages/login', {

    });
});

app.get('/admin-console', (req, res) => {
    res.render('pages/admin-console', {

    });
});

app.get('/admin-console/create-book', (req, res) => {
    res.render('pages/admin-console/create-book', {

    });
});

app.get('admin-console/update-book/:id', (req, res) => {
    let params = req.params;
    res.render('pages/update', {
        
    })
})
app.get('/book/:id', (req, res) => {
    let params = req.params;
    res.render('pages/hunter', {

    });
});



app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
  });