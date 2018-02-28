const passport = require("passport");

const login = passport.authenticate("auth0", {
  successRedirect: "http://localhost:3000/#/networkselector",
  failureRedirect: "http://localhost:3000/#/"
});

// const getUser = (req, res) => {
//     console.log(req.user);
//   if (req.user) res.status(200).json(req.user);
//   else res.redirect("http://localhost:3000/#/");
// };


const getUser = (req, res, next) => {
  const db = req.app.get("db");
  db
    .user.get_user([req.user.authid])
    .then((user) => {res.status(200).send(user); 
      // console.log(req.params)
    })
    .catch(() => res.status(500).send());
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



