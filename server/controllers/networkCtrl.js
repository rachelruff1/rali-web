const getNetwork = (req, res, next) => {
  const db = req.app.get("db");
  db.network
    .get_networks([req.user.authid])
    .then(network => {
      res.status(200).send(user);
    })
    .catch(() => res.status(500).send());
};

module.exports = {
    getNetwork
}