import express from 'express'
import { Product } from './productModel.js'

const ProductRouter = express.Router()

ProductRouter.get('/data/', async(request, response) => {

    const product_data = await Product.find({})

    response.json(product_data)
})

ProductRouter.post('/add/', async (request, response) => {

    console.log(request.body)

    const new_product = new Product(request.body)

    await new_product.save()

    response.json("Data Saved")

})

ProductRouter.patch('/update/:id/', async(request, response) => {

    const {id} = request.params

    console.log(id)

    await Product.findByIdAndUpdate(id, request.body)

    response.json('Data Updated')

})

ProductRouter.delete('/delete/:id/', async(request, response) => {
    const {id} = request.params

    await Product.findByIdAndDelete(id)

    const product_data = await Product.find({})

    response.json(product_data)

})

export default ProductRouter