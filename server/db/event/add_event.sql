INSERT INTO events
    (networkid, creatorid, name, date, time, location, glocation, description)
VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING networkid, eventid, name, date, time, location, glocation;

