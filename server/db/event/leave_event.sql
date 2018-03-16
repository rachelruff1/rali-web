DELETE FROM events_users
WHERE userid =$1 AND eventid = $2;