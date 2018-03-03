const getMyNetworkEvents = (req, res, next) => {
    const db = req.app.get('db')
    console.log(req.params);
    db.event
    .get_my_events([req.params, req.user.authid])
    .then(events => {
        res.status(200).send(events);
      })
      .catch(() => res.status(500).send())
}

const getAllNetworkEvents = (req, res, next) => {
    const db = req.app.get('db')
    db.event
    .get_network_events([req.params])
    .then(events => {
        res.status(200).send(events);
      })
      .catch(() => res.status(500).send())
}

module.exports = {
    getMyNetworkEvents,
    getAllNetworkEvents
}