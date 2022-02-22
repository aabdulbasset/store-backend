import express from 'express'

export const checkID = async (req:express.Request,res:express.Response,next:express.NextFunction):Promise<void>=>{
    const id = Number(req.params.id)
    if(isNaN(id) || id == 0){
        res.sendStatus(400)
    }else{
        next()
    }
}