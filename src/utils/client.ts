import  { Pool } from 'pg'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ debug: true, path: path.resolve(`${__dirname}/../../.env`)})

let client:Pool = new Pool();
if(process.env.ENV === 'dev') {
    client = new Pool({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DB,
        password: process.env.PASSWORD
        
    })
  }

  if(process.env.ENV === 'test') {
    client = new Pool({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DB_TEST,
        password: process.env.PASSWORD
        
    })
  }
  
  export default client;