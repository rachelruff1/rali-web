const getMyNetworkEvents = (req, res, next) => {
  const db = req.app.get("db");
  // console.log('getMNE CTRL:', req.params.id, req.user.authid);
  db.event
    .get_my_network_events([req.params.id, req.user.authid])
    .then(events => {
      res.status(200).send(events);
    })
    .catch(() => res.status(500).send());
};

const getAllNetworkEvents = (req, res, next) => {
  const db = req.app.get("db");
  // console.log('getANE CTRL:', req.params.id);
  db.event
    .get_all_network_events([req.params.id])
    .then(events => {
      res.status(200).send(events);
    })
    .catch(() => res.status(500).send());
};

const createEvent = (req, res, next) => {
  const db = req.app.get("db");
  console.log("createEvent reqbody:", req.body);
  //get the networkid
  const {
    networkid,
    eventName,
    eventDate,
    eventTime,
    eventLocation,
    eventDescription
  } = req.body;
  db.event
    .add_event([
      networkid,
      req.user.id,
      eventName,
      eventDate,
      eventTime,
      eventLocation,
      eventDescription
    ])
    .then(response => {
      console.log("CE resp:", response[0]);
      db.event.add_events_users([req.user.id, response[0].eventid]);
      res.status(200).send(response);
    })
    .catch(() => res.status(500).send());
};

const getEvent = (req, res, next) => {
  const db = req.app.get("db");

  console.log(req.params);
  const { id } = req.params;
  db.event
    .get_event([id, req.user.id])
    .then(event => {console.log(event);res.status(200).send(event)})
    .catch(() => res.status(500).send());
};

const adminDeleteEvent = (req, res, next) => {
    const db = req.app.get('db');
    console.log(req.params.id);
    db.event
        .admin_delete_event([req.params.id])
        .then(res.status(200).send())
        .catch(() =>res.status(500).send())
}
module.exports = {
  getMyNetworkEvents,
  getAllNetworkEvents,
  createEvent,
  getEvent,
  adminDeleteEvent
};
