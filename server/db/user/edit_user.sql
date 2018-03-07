UPDATE users 
Set firstname = $2, lastname = $3, email = $4, cell = $5, picture = $6
WHERE authid = $1;