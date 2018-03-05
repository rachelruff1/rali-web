require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");
const massive = require("massive");
const Auth0Strategy = require("passport-auth0");

const uCtrl = require("./controllers/userCtrl");
const nCtrl = require("./controllers/networkCtrl");
const eCtrl = require("./controllers/eventCtrl");

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

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(console.log);

app.use(
  session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
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
      // console.log(profile);
      app
        .get("db")
        .user.get_user(profile.id)
        .then(response => {
          if (!response[0]) {
            app
              .get("db")
              .user.add_user([
                profile.id,
                profile.name.givenName,
                profile.name.familyName
              ])
              .then(created => done(null, created[0]));
          } else {
            return done(null, response[0]);
          }
        });
    }
  )
);

passport.serializeUser((user, done) => {
  return done(null, user);
});

passport.deserializeUser((user, done) => {
  return done(null, user);
});

// app.get("/api/me", (req, res, next) => {
//   if (req.user) res.json(req.user);
//   else res.json("NO USER");
// });

app.get("/login", uCtrl.login);
app.get("/api/getUser", uCtrl.getUser);
app.get("/api/logout", uCtrl.logout);

app.get("/api/getNetworks", nCtrl.getNetworks);
app.post("/api/createNetwork", nCtrl.createNetwork);
app.get("/api/performSearch", nCtrl.performSearch);
app.get("/api/verifyNetwork", nCtrl.verifyNetwork);;

app.get("/api/getMyNetworkEvents/:id", eCtrl.getMyNetworkEvents);
app.get("/api/getAllNetworkEvents/:id", eCtrl.getAllNetworkEvents);
app.post('/api/createEvent', eCtrl.createEvent);

app.listen(port, console.log(`Listening on port ${port}`));
