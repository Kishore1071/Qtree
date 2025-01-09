import express, { json } from 'express'
import { config } from 'dotenv'
import { connect } from 'mongoose'
import cors from 'cors'
import CategoryRouter from './category/categoryController.js'
import ProductRouter from './product/productController.js'
import BillRouter from './Bills/BillController.js'

const app = express()

app.use(json())
app.use(cors())
config()


// app.get('/sample/', (request, response) => {

//     let user_data = {
//         user_name : "Kishore",
//         password: '1234',
//     }

//     response.json(user_data)
// })

// app.post('/sample/', (request, response) => {

//     console.log(request.body)

//     response.json('Data')

// })

// app.patch('/sample/:id/', (request, response) => {

//     console.log(request.params)

//     console.log(request.body)

//     response.json('Updated')
// })

// app.delete('/sample/:id/', (request, response) => {

//     console.log(request.params)

//     response.json('Deleted')
// })

// console.log(process.env.mongodb_string, "process.env.mongodb_string")


app.use('/category/', CategoryRouter)
app.use('/product/', ProductRouter)
app.use('/bill/', BillRouter)

const Start = async () => {

    await connect(process.env.mongodb_string)
    app.listen(process.env.port, () => console.log(`Serving on the port ${process.env.port}...`))
}
Start()