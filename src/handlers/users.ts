import express from 'express'
import {user, userModel} from '../models/user'
import bcrypt from 'bcrypt'
import jwt,{ Secret } from 'jsonwebtoken'


const userObject = new userModel

export const index = async (__req:express.Request, res:express.Response):Promise<void> => {
    res.send(await userObject.index())
} 

export const show = async (req:express.Request, res:express.Response):Promise<void> => {
    res.send(await userObject.show(Number(req.params.id)))
}

export const create = async (req:express.Request, res:express.Response):Promise<void> => {
    let pass = bcrypt.hashSync(req.body.password + process.env.BCRYPT_PEPPER, Number(process.env.SALT_ROUNDS))
    let u:user = {
        firstName:req.body.firstname,
        lastName:req.body.lastname,
        password:pass
    }
    if(await userObject.create(u)){
        const token = jwt.sign(u.lastName,process.env.SECRET_FOR_TOKEN as Secret)
        res.setHeader("Authorization",`Bearer ${token}`)
        res.sendStatus(200)
    }else{
        res.sendStatus(400)
    }
}   