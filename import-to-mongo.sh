# 1 - Base de datos
# 2 - Dir. del archivo
# 3 - Coleccion
mongoimport --host mongo --db $1 --collection $3 --file $2
