import { Request,Response } from "express";
import { Order,OrderModel } from "../models/order";

let OrderObject = new OrderModel

export const current = async (req:Request,res:Response):Promise<void>=>{
    const id = Number(req.params.id)
    res.send(await OrderObject.Current(id))
    
}
export const completed = async (req:Request,res:Response):Promise<void>=>{
    const id = Number(req.params.id)
    res.send(await OrderObject.Complete(id))
    
}