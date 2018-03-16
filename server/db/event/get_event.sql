SELECT * FROM events e
JOIN events_users eu ON eu.eventid = e.eventid
JOIN users u ON e.creatorid = u.id
WHERE e.eventid = $1;
--  AND eu.userid = $2;