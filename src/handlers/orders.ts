import { Request,Response } from "express";
import { Order,OrderModel } from "../models/order";

let OrderObject = new OrderModel

export const current = async (req:Request,res:Response):Promise<void>=>{
    const id = Number(req.params.id)
    try{res.send(await OrderObject.Current(id))}
    catch(err){res.sendStatus(400)}
    
}
export const completed = async (req:Request,res:Response):Promise<void>=>{
    const id = Number(req.params.id)
    try{res.send(await OrderObject.Complete(id))}
    catch(err){res.sendStatus(400)}
}