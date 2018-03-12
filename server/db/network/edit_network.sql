UPDATE networks 
Set name = $2, password = $3
WHERE networkid = $1;