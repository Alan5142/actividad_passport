const router = require('express').Router();
const passport = require('passport');
const path = require('path');
// path: auth/

// GET /login
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/login.html'));
});

// GET /google/login
router.get('/google/login', passport.authenticate('google', {
    scope:
        ['profile', 'email']
}));

// GET /google/callback
router.get(
    '/google/callback',
    passport.authenticate('google'),
    function (req, res) {
        console.log('req.query.code', req.query.code);
        res.redirect('/');
    }
);

// GET /verifyLogin
router.get('/verifyLogin', (req, res) => {
    if (req.isAuthenticated()) {
        res.send(req.user);
    } else {
        res.sendStatus(401);
    }
});

// GET /logout
router.get('/logout', (req, res) => {
    req.logout();
    
    res.redirect('/');
});

module.exports = router;
