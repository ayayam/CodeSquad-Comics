const User = require('../models/user-model');
const Comics = require('../models/comic-model');
const passport = require('passport');

module.exports = {
    index: (req, res) => {
        Comics.find({})
            .then((comics) => {
                res.render('pages/index', {
                   comics: comics
                });
            })
            .catch((err) => {
                console.log(err);
            })
    },

    about: (req, res) => {
        res.render('pages/about')
    },

    login_get: (req, res) => {
        res.render('pages/login')
    },

    login_post: (req, res) => {
        const {username, password} = request.body;
        const user = new User({
            username: username,
            password: password
        });
        request.login(user, (error) => {
            if (error) {
                console.log(error)
            } else {
                passport.authenticate('local')(req, res, () => {
                    response.redirect('/admin-console');
                });
            }    
        });
    },

    register_get: (req, res) => {
        res.render('pages/register');
    },

    register_post: (req, res) => {
        User.register({username: request.body.username}, request.body.password, (error, user) => {
            if (error) {
                console.log(error);
            } else {
                passport.authenticate('local')(req, res, () => {
                    res.redirect('/admin-console');
                });
            }
        });
    },

    google_get: passport.authenticate('google', { scope: ['openid', 'profile', 'email']}),

    google_redirect_get: [
        passport.authenticate('google', {failureRedirect: '/login'}), function(req, res) {
        res.redirect('/admin-console');
    }],

    logout: (req, res) => {
        req.logout(function(err) {
            if (err) {return next(err);}
            response.redirect('/');
        })
    }
}