const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const path = require('path');
const authRoutes = require('./routes/auth.route');
const profileRoutes = require('./routes/profile.route');

const app = express();

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: ['clave'] //clave para encriptar
}));

require('dotenv').config();
require('./config/passport');
app.use(passport.initialize());
app.use(passport.session());

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/home.html'));
});

app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

module.exports = app;
