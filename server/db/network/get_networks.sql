-- SELECT * from networks n
-- JOIN users u ON u.id = n.userid
-- WHERE authid = $1;

SELECT *
FROM networks n
JOIN networks_users nu ON nu.networkid = n.networkid
JOIN users u ON u.id = nu.userid
WHERE u.authid = $1;