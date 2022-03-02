
# Storebackend api

A simple store backend api with three Simple endpoints 


## Deployment

- Download and install [PostgreSql](https://www.postgresql.org/download/)  
- Install required packages
```bash
yarn
```
- Initialize the project 
```bash
npm run init
```
- Start the project
```bash
npm run start
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
`ENV = dev`


## Ports
API runs on port `3000` PSQL runs by default on port `5432`

## Token
use
```html
Authorization:Bearer eyJhbGciOiJIUzI1NiJ9.YWRtaW4.C1qTmcDlEw6PHchOjmCluce0gps9kJ1eZ-bfX6LZkeY
```
for any actions that require admin

## Scripts
#### To run jasmine tests
```bash
npm run test
```

#### To run tsc-watch
```bash
npm run watch
```

#### To run db-migrate up
```bash
npm run setupdb
```

#### To run db-migrate down
```bash
npm run removedb
```

#### To build the project
```bash
npm run build
```
