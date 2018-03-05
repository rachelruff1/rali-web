INSERT INTO events
    (networkid, creatorid, name, date, time, location, description)
VALUES
    ($1, $2, $3, $4, $5, $6, $7) RETURNING networkid, eventid, name, date, time, location;

