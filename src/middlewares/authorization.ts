import express from 'express'
import jsontoken, { Secret } from 'jsonwebtoken'

export const validateAdminToken = (req:express.Request,res:express.Response,next:express.NextFunction)=>{
    if(!req.headers.authorization){
        res.sendStatus(401)
    }else{
        const parsedToken:string = req.headers.authorization?.split(" ")[1] as string
        if(jsontoken.verify(parsedToken, process.env.SECRET_FOR_TOKEN as Secret) != "admin"){
            res.sendStatus(403)
        }else{
            next()
        }
    }
}

export const validateUserToken = (req:express.Request,res:express.Response,next:express.NextFunction)=>{
    if(!req.headers.authorization){
        res.sendStatus(401)
    }else{
        const parsedToken:string = req.headers.authorization?.split(" ")[1] as string
        if(jsontoken.verify(parsedToken, process.env.SECRET_FOR_TOKEN as Secret)){
            next()
        }else{
            res.sendStatus(401)
        }
    }
}