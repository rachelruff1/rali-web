DELETE FROM networks_users
WHERE userid = $1 AND networkid =$2;