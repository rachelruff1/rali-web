DELETE FROM networks_users
WHERE networkid = $1;

DELETE FROM events
WHERE networkid = $1;

DELETE FROM networks 
WHERE networkid = $1;

