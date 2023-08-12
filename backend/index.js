const express = require('express');
const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const session = require('express-session');

const app = express();

app.use(session({ 
    secret: 'your-session-secret',
    resave: true,
    saveUninitialized: true 
}));

app.use(passport.initialize());
app.use(passport.session());

CLIENT_ID = 'af1ac596d80b4149a07c3818a52ad19f'
CLIENT_SECRET = '2bf779decea141b99a924ef86c7001d0'
const REDIRECT_URI = 'http://localhost:8888/callback';

passport.use(new SpotifyStrategy({
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: REDIRECT_URI
  },
  function(accessToken, refreshToken, expires_in, profile, done) {
    // Here you could store the profile data in your user database
    // For this example, we'll just forward the profile data
    profile.accessToken = accessToken;
    return done(null, profile);
  }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

app.get('/login', passport.authenticate('spotify', {
    scope: ['user-read-email', 'user-read-private']
}));

app.get('/callback', passport.authenticate('spotify', { failureRedirect: '/' }), 
    function(req, res) {
        // Successful authentication
        // Redirect to React frontend with the user data
        console.log("success redirect")
        
        res.redirect(`http://localhost:3000/?user=${encodeURIComponent(JSON.stringify(req.user))}`);
    }
);

app.get('/logout', function (req, res) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('http://localhost:3000');
        });
});

app.listen(8888, () => {
    console.log('Server is running on http://localhost:8888');
});
