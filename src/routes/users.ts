import { Request, Response, Router } from "express";
import {index, show, create} from '../handlers/users'
import { checkID } from "../middlewares/checkid";
import { validateAdminToken, validateUserToken } from "../middlewares/authorization";

const router = Router()
//Setting routes
router.get('/',validateUserToken, index)
router.get('/id/:id',checkID,validateUserToken , show)
router.post('/create', validateAdminToken, create)

export default router