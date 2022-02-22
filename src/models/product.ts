import client  from "../utils/client"

export type product = {
    name:string,
    price:number,
    category:number,
}

export class productModel{
    async index():Promise<product[]>{
        const query = "select * from products"
        const conn = await client.connect()
        const result =await conn.query(query)
        conn.release()
        return result.rows
    }
    async show(id:number):Promise<product|null>{
        try{
            const query = "select * from products where id = ($1)"
            const conn = await client.connect()
            const result = await conn.query(query,[id])
            conn.release()
            return result.rows[0]
        }
        catch(err){
            return null
        }
    }
    async create(p : product):Promise<number>{
        try{
            const query = "insert into products(name, price, category) values($1,$2,$3)"
            const conn = await client.connect()
            await conn.query(query,[p.name,p.price,p.category])
            conn.release()
            return 1
        }
        catch(err){
            return 0
        }
    }
    async showCategory(id:number):Promise<product[]>{
        const query = "select * from products where category = ($1)"
        const conn = await client.connect()
        const result = await conn.query(query,[id])
        conn.release()
        return result.rows
    }
}