import {product, productModel} from '../models/product'
import { Request, Response } from 'express'

const productObj = new productModel

export const index = async (req:Request,res:Response):Promise<void>=>{
    try{
        res.send(await productObj.index())
    }catch(err){
        res.sendStatus(400)
    }
}

export const show = async (req:Request, res:Response):Promise<void>=>{

    try{
        res.send(await productObj.show(Number(req.params.id)))
    }catch(err){
        res.sendStatus(400)
    }
}

export const create = async (req:Request, res:Response):Promise<void>=>{
    const p: product = {
        name:req.body.name,
        price:req.body.price,
        category:req.body.category
    }
    if(!req.body.name || !req.body.price || !req.body.category || await productObj.create(p) == 0){
        res.sendStatus(400)
    }else{
        res.sendStatus(200)
    }
}

export const showCategory = async (req:Request, res:Response):Promise<void>=>{
    
    try{
        res.send(await productObj.showCategory(Number(req.params.id)))
    }catch(err){
        res.sendStatus(400)
    }
}