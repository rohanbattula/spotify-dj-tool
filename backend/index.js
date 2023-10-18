const express = require('express');
const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const session = require('express-session');
const mongoose = require("mongoose");


mongoose.set("strictQuery", false);

require('dotenv').config();

const app = express();

app.use(session({ 
    secret: 'your-session-secret',
    resave: true,
    saveUninitialized: true 
}));

// MONGODB INIT

const mongoDB = "mongodb+srv://rohanbtl:vongvongX2!@kratedigger.xru3nup.mongodb.net/?retryWrites=true&w=majority";
// Wait for database to connect, logging an error if there is a problem
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log("connected to mongo")
}

const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: String,
  accessToken: String,
  refreshToken: String,
});
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const User = mongoose.model('Users', userSchema);

// PASSPORT AUTH

app.use(passport.initialize());
app.use(passport.session());

CLIENT_ID = process.env.CLIENT_ID
CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URI = 'http://localhost:8888/callback';

passport.use(new SpotifyStrategy({
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: REDIRECT_URI
  },
  function(accessToken, refreshToken, expires_in, profile, done) {
    // Here you could store the profile data in your user database
    // For this example, we'll just forward the profile data
    const spotifyId = profile.id
    const existingUser =  User.findOne({ _id: spotifyId });

    // If the user doesn't exist, create a new one
    if (!existingUser) {
      const newUser =  User.create({
        _id: spotifyId,
        accessToken: accessToken,
        refreshToken: refreshToken
      });
      console.log("New user saved:", newUser);
    } else {
      console.log("User with this Spotify ID already exists.");
    }
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
        
        res.redirect(`http://localhost:3000/?user=${encodeURIComponent(JSON.stringify(req.user.id))}`);    }
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
