const express = require('express');
const siteRoutes = require('./site-routes');
const adminRoutes = require('./admin-routes');
const bookRoutes = require('./book-routes');
const router = express.Router();

router.use('/', siteRoutes);
router.use('/books', bookRoutes);
router.use('/admin-console', adminRoutes);

module.exports = router;