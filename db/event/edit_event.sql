UPDATE events 
SET name = $2, date = $3, time = $4, location = $5, description = $6
WHERE eventid = $1;