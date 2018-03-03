SELECT *
FROM events e 
JOIN events_users eu ON eu.eventid = e.eventid 
JOIN users u ON u.id = eu.userid
WHERE networkid = $1 AND u.authid = $2;