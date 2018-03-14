UPDATE networks 
Set password = $2
WHERE networkid = $1;