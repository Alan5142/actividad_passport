const router = require('express').Router();
const path = require('path');
const isLoggedIn = require('../utils/isLoggedIn');

router.get('/', isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/profile.html'));
});

module.exports = router;