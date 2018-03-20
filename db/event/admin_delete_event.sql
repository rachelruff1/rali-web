DELETE FROM events_users
WHERE eventid = $1;

DELETE FROM events 
WHERE eventid = $1;