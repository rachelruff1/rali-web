INSERT INTO users ( authId, firstName) VALUES ($1, $2, $3) RETURNING authId, firstName;
