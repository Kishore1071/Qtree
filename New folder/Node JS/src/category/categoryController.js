import express from 'express'
import { Category } from './categoryModel.js'

const CategoryRouter = express.Router()

CategoryRouter.get('/data/', async(request, response) => {

    const category_data = await Category.find({})

    response.json(category_data)
})

CategoryRouter.post('/add/', async (request, response) => {

    const new_category = new Category(request.body)

    await new_category.save()

    response.json("Data Saved")

})

CategoryRouter.patch('/update/:id/', async(request, response) => {

    const {id} = request.params

    console.log(id)

    await Category.findByIdAndUpdate(id, request.body)

    response.json('Data Updated')

})

CategoryRouter.delete('/delete/:id/', async(request, response) => {
    const {id} = request.params

    await Category.findByIdAndDelete(id)

    const category_data = await Category.find({})

    response.json(category_data)

})

export default CategoryRouter