SELECT *
FROM events e
JOIN events_networks en ON en.networkid = e.eventid
JOIN users u ON u.id = .userid
WHERE u.authid = $1;