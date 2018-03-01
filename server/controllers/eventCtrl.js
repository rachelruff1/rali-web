const getMyEvents = (req, res, next) => {
    const db = req.app.get('db')
    db.event
    .get_my_events([req.event.eventid])
    .then(events => {
        res.status(200).send(events);
      })
      .catch(() => res.status(500).send())
}

const getNetworkEvents = (req, res, next) => {
    const db = req.app.get('db')
    db.event
    .get_network_events([req.network.networkid])
    .then(events => {
        res.status(200).send(events);
      })
      .catch(() => res.status(500).send())
}

module.exports = {
    getMyEvents,
    getNetworkEvents
}