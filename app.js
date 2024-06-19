require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3000;
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const MemoryStore = require('memorystore')(session)
const passport = require('passport');


app.set('view engine', 'ejs');

app.use(morgan('combined'));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use(session({
  cookie: { maxAge: 86400000 },
  store: new MemoryStore({
    checkPeriod: 86400000
  }),
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());

const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

require('./config/connection');


app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
  });



// app.get('/', (req, res) => {
//     res.render('pages/index', {

//     });
// });

// app.get('/about', (req, res) => {
//     res.render('pages/about', {

//     });
// });

// app.get('/login', (req, res) => {
//     res.render('pages/login', {

//     });
// });

// app.get('/admin-console', (req, res) => {
//     res.render('pages/admin', {

//     });
// });

// app.get('/admin-console/create-book', (req, res) => {
//     res.render('pages/create', {

//     });
// });

// app.get('/book/:id', (req, res) => {
//     let params = req.params;
//     res.render(`pages/book`, {

//     });
// });

// app.get('/admin-console/update-book/:id', (req, res) => {
//     res.render('pages/update', {

//     });
// });

