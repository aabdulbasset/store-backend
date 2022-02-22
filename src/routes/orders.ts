import express from 'express'
import {current,completed} from "../handlers/orders"
import {validateAdminToken} from '../middlewares/authorization'
import {checkID} from '../middlewares/checkid'

const router = express.Router()
router.get('/:id/current',[validateAdminToken,checkID],current)
router.get('/:id/complete',[validateAdminToken,checkID],completed)
export default router