const getNetworks = (req, res, next) => {
  const db = req.app.get("db");
  db.network
    .get_networks([req.user.authid])
    .then(network => {
      // console.log('getNetworks ctrl:', network);
      res.status(200).send(network);
    })
    .catch(() => res.status(500).send());
};

module.exports = {
    getNetworks
}
//[req.user.authid]