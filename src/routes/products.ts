import express from 'express'
import { index, show, create, showCategory } from '../handlers/products'
import {validateAdminToken} from '../middlewares/authorization'
import {checkID} from '../middlewares/checkid'
import { json } from 'body-parser'

const router = express.Router()




router.get('/', index)
router.get('/id/:id',checkID, show)
router.post('/create',validateAdminToken,create)
router.get('/category/:id',checkID,showCategory)

export default router