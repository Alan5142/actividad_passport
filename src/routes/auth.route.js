const router = require('express').Router();
const passport = require('passport');
// path: auth/

// GET /login

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

// GET /logout

module.exports = router;
