import client from "../utils/client";

export type Order = {
    products:string[],
    order_id:number,
    status:boolean,
    user_id:number
}

export class OrderModel{
    async Current(user_id:number):Promise<Order[]>{
        const query = 'select id from orders where user_id = ($1) and status=false;'
        try{
            const conn = await client.connect()
            const order_result = await conn.query(query,[user_id])
            const ordersList = await Promise.all(order_result.rows.map(async (order)=>{
                const query = 'select product_id,quantity from orders_products where order_id = ($1)'
                const product_result = await conn.query(query,[order.id])
                const Order:Order = {
                    user_id:user_id,
                    order_id:order.id,
                    status:false,
                    products:product_result.rows
                    
                }
                return Order
            }))

            return ordersList
        }
        catch(err){
                throw new Error('"Current" Model failed')
        }
    }

    async Complete(user_id:number):Promise<Order[]>{
        const query = 'select id from orders where user_id = ($1) and status=true;'
        try{
            const conn = await client.connect()
            const order_result = await conn.query(query,[user_id])
            const ordersList = await Promise.all(order_result.rows.map(async (order)=>{
                const query = 'select product_id,quantity from orders_products where order_id = ($1)'
                const product_result = await conn.query(query,[order.id])
                const Order:Order = {
                    user_id:user_id,
                    order_id:order.id,
                    status:true,
                    products:product_result.rows
                    
                }
                return Order
            }))

            return ordersList
        }catch(err){
            throw new Error('"Complete" model failed')
        }
    }

}