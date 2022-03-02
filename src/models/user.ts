
import client from '../utils/client'

export type user = {
    firstName:string,
    lastName:string,
    password:string,
}
type returnUser = {
    firstname:string,
    lastname:string
}
export class userModel{
    async index():Promise<returnUser[]>{
        const query = 'select firstName,lastName from users'
        try{
            const conn = await client.connect()
            const result = await conn.query(query)
            conn.release()
            return result.rows
        }catch(err){
            throw new Error("'index' model failed")
        }
    }

    async show(id:number):Promise<returnUser>{
        const query = 'select firstName,lastName from users where id = ($1)'
        try{
            const conn = await client.connect()
            const result = await conn.query(query,[id])
            conn.release()
            return result.rows[0]
        }catch(err){
            throw new Error('"show" model failed')
        }
    }

    async create(u: user):Promise<number>{
        try{
            const query = 'insert into users(firstName, lastName, password) values($1,$2,$3)'
            const conn = await client.connect()
            await conn.query(query,[u.firstName,u.lastName,u.password])
            conn.release()
            return 1
        }catch(err){
            return 0
        }
    }
}