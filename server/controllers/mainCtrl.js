const passport = require("passport");

const login = passport.authenticate("auth0", {
  successRedirect: "http://localhost:3000/#/networkselector",
  failureRedirect: "http://localhost:3000/#/"
});

const getUser = (req, res) => {
    console.log(req.user);
  if (req.user) res.status(200).json(req.user);
  else res.redirect("http://localhost:3000/#/");
};

const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("http://localhost:3000/#/");
  });
};

module.exports = {
    login,
    getUser,
    logout
};