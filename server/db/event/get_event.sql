SELECT * FROM events e
JOIN events_users eu ON eu.eventid = e.eventid
WHERE e.eventid = $1 AND eu.userid = $2;