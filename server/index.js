require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");
const massive = require("massive");
const Auth0Strategy = require("passport-auth0");
const ctrl = require("./controllers/mainCtrl");

const port = 3001;
const app = express();
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
        .user.get_user(profile.id)
        .then(response => {
          console.log(profile);
          if (!response[0]) {
            app
              .get("db")
              .user.add_user([profile.id, profile.name.givenName, profile.name.familyName])
              .then(created => done(null, created[0]));
          } else {
            return done(null, response[0]);
          }
        });
    }
  )
);

passport.serializeUser((user, done) =>  done(null, user));
passport.deserializeUser((user, done) => done(null, user));

app.get("/login", ctrl.login);

app.get("/api/me", ctrl.getUser);

app.get("/api/logout", ctrl.logout);

app.listen(port, console.log(`Listening on port ${port}`));
