import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import products from './routes/products'
import users from './routes/users'
import orders from './routes/orders'
// import orders from './routes/orders'

const app: express.Application = express()
const address: string = "0.0.0.0:3000"

app.use(bodyParser.json())
//Use routes
app.use('/products', products)
app.use('/users', users)
app.use('/orders', orders)
app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})
