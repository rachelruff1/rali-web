const getMyNetworkEvents = (req, res, next) => {
    const db = req.app.get('db')
    // console.log('getMNE CTRL:', req.params.id, req.user.authid);
    db.event
    .get_my_network_events([req.params.id, req.user.authid])
    .then(events => {
        res.status(200).send(events);
      })
      .catch(() => res.status(500).send())
}

const getAllNetworkEvents = (req, res, next) => {
    const db = req.app.get('db')
    // console.log('getANE CTRL:', req.params.id);
    db.event
    .get_all_network_events([req.params.id])
    .then(events => {
        res.status(200).send(events);
      })
      .catch(() => res.status(500).send())
}

module.exports = {
    getMyNetworkEvents,
    getAllNetworkEvents
}