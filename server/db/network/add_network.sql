INSERT INTO networks (creatorid, name, password) VALUES ($1, $2, $3) RETURNING networkid, name;