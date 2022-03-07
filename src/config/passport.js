const passport = require('passport');
const userModel = require('../models/User');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: 'http://localhost:3000/auth/google/callback',
        },
        async function (accessToken, refreshToken, profile, done) {
            const user = await userModel.find(profile.id)
                .catch(() => userModel.create(profile));
            return done(null, user);
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    userModel.find(id)
        .then(user => done(null, user))
        .catch(err => done(err));
});