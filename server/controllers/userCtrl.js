const passport = require("passport");

const login = passport.authenticate("auth0", {
  successRedirect: "http://localhost:3000/#/network-selector",
  failureRedirect: "http://localhost:3000/#/"
});

const getUser = (req, res, next) => {
  const db = req.app.get("db");
  db.user
    .get_user([req.user.authid])
    .then(user => {
      // console.log(user);
      res.status(200).send(user);
    })
    .catch(() => res.status(500).send());
};

const editUser = (req, res, next) => {
  const db = req.app.get('db');
  const {firstname, lastname, cell, email, picture} = req.body;
  db.user
  .edit_user([req.user.authid, firstname, lastname, email, cell, picture])
  .then(res.status(200).send())
  .catch(()=>res.status(500).send())
}

const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("http://localhost:3000/#/");
  });
};

module.exports = {
  login,
  getUser,
  logout,
  editUser
};
