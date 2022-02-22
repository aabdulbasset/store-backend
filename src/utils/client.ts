import  { Pool } from 'pg'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ debug: true, path: path.resolve(`${__dirname}/../../.env`)})

const client = new Pool({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DB,
    password: process.env.PASSWORD
    
})
export default client