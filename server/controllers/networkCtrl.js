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

const performSearch = (req, res, next) => {
  const { networkSearch } = req.query;
  const db = req.app.get("db");
  db.network
    .get_global_networks()
    .then(resp => {
      ((resp, networkSearch, res) => {
        filteredNetworks = [];
        resp.filter(entry => {
          // console.log("entries:", entry.name);
          // console.log("inside filter:", resp);
          if (entry.name.toLowerCase().includes(networkSearch.toLowerCase())) {
            filteredNetworks.push(entry);
          }
        });
        if (filteredNetworks.length > 0) {
          // console.log('if:',filteredNetworks)
          res.status(200).send(filteredNetworks);
        } else {
          // console.log('else:',filteredNetworks)
          res.status(500).send();
        }
      })(resp, networkSearch, res);
    })
    .catch(() => res.status(500).send());
};

const verifyNetwork = (req, res, next) => {
  const { networkVerifyPassword, networkNameForVerify } = req.query;
  const db = req.app.get("db");
  let networkPasswordTest = false;
  db.network
    .get_global_networks()
    .then(resp => {
      resp.map(entry => {
        if (
          entry.name === networkNameForVerify &&
          entry.password === networkVerifyPassword
        ) {
          networkPasswordTest = true;
          db.network
            .add_networks_users([entry.networkid, req.user.id])
            .then()
            .catch(console.log);
        }
      });
      if (networkPasswordTest === true) {
        res.status(200).send(true);
      } else {
        res.status(500).send(false);
      }
    })
    .catch(() => res.status(500).send());
};

const leaveNetwork = (req, res, next) =>{
  const db = req.app.get('db');
  console.log(req.params);
  db.network
    .leave_network([req.params.userid, req.params.networkid])
    .then(()=>res.status(200).send())
    .catch(()=>res.status(500).catch())
}

const editNetwork = (req, res, next) => {
  const db = req.app.get('db');
  console.log('editNetwork ctrl:',req.body)
  db.network
    .edit_network([network.networkid, network.name, network.password])
    .then(()=>res.status(200).send())
    .catch(() => res.status(500).catch())
}

module.exports = {
  getNetworks,
  createNetwork,
  performSearch,
  verifyNetwork,
  leaveNetwork,
  editNetwork
};
//[req.user.authid]
