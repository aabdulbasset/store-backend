
# Storebackend api

A simple store backend api with three Simple endpoints 


## Deployment

- Download and install [PostgreSql](https://www.postgresql.org/download/)  
- Launch PSQL  
- Create a new database 
```sql
CREATE DATABASE storedev;
CREATE DATABASE storetest;
```

- Connect to the database

```sql
\c storedev
```
- Clone the repository
```bash
git clone "this repo"
```

- Run the migrations 
```bash
npx db-migrate up
```

- Build the project 
```bash
npm tsc
```

- Start the project
```bash
npm start
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`BCRYPT_PEPPER = super_secret_pepper`  
`SECRET_FOR_TOKEN = Hakuna_matata_@!`  
`SALT_ROUNDS = 10`  
`HOST = localhost`  
`DB = storedev`  
`DB_TEST = storetest`  
`USER = postgres`  
`PASSWORD = 123`  
`PORT= 5432`


## Ports
API runs on port `3000` PSQL runs by default on port `5432`

