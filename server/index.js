require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");
const Auth0Strategy = require('passport-auth0')
const passport = require('passport');

const port = 3001;
const app = (express());
app.use(json());
app.use(cors());

const {
  CONNECTION_STRING,
  DOMAIN,
  CLIENT_ID,
  CLIENT_SECRET,
  SESSION_SECRET
} = process.env;

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(console.log);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 100000
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(
  new Auth0Strategy(
    {
      domain: DOMAIN,
      clientSecret: CLIENT_SECRET,
      clientID: CLIENT_ID,
      scope: "openid profile",
      callbackURL: "/login"
    },
    (accessToken, refreshToken, extraParams, profile, done) => {
      app
        .get("db")
        .getUser(profile.id)
        .then(response => {
          if (!response[0]) {
            app
              .get("db")
              .addUser([profile.id, profile.displayName])
              .then(created => done(null, created[0]));
          } else {
            return done(null, response[0]);
          }
        });
    }
  )
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

app.get(
  "/login",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/#/",
    failureRedirect: "http://localhost:3000/#/login"
  })
);

app.get("/api/me", (req, res) => {
  if (req.user) res.status(200).json(req.user);
  else res.redirect("http://localhost:3000/#/login");
});

app.get("/api/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("http://localhost:3000/#/login");
  });
});



app.listen(port, console.log(`Listening on port ${port}`));
