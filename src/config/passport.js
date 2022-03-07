const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: 'http://localhost:5000/auth/google/callback',
        },
        function (accessToken, refreshToken, profile, done) {
            console.log('working');
            console.log('accessToken', accessToken);
            console.log('refreshToken', refreshToken);
            console.log('profile', profile);
        }
    )
);