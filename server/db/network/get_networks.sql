SELECT * from network n
JOIN users u ON u.id = n.userid
WHERE authid = $1;