const getNetworks = (req, res, next) => {
  const db = req.app.get("db");
  db.network
    .get_networks([req.user.authid])
    .then(networks => {
      // console.log('getNetworks ctrl:', network);
      res.status(200).send(networks);
    })
    .catch(() => res.status(500).send());
};

const createNetwork = (req, res, next) => {
  const db = req.app.get("db");
  console.log(req.body);
  const { networkName, networkPassword } = req.body;
  db.network
    .add_network([req.user.id, networkName, networkPassword])
    .then(response => {
      console.log(response[0]);
      db.network.add_networks_users([response[0].networkid, req.user.id]);
      res.status(200).send(response[0].name);
    })
    .catch(() => res.status(500).send());
};

module.exports = {
  getNetworks,
  createNetwork
};
//[req.user.authid]
