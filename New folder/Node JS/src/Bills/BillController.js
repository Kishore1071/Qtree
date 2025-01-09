import express, { response } from 'express'
import { Product } from '../product/productModel.js'
import { BillDetails, BillProducts } from './billModel.js'

const BillRouter = express.Router()

BillRouter.get('/data/', async(request, response) => {

    const bill_details = await BillDetails.find({})

    const all_bills = []

    for (let bill of bill_details) {

        const bill_products = await BillProducts.find({bill_ref: bill._id})

        const single_bill = [
            bill,
            bill_products
        ]

        all_bills.push(single_bill)
    }

    response.json(all_bills)
})

BillRouter.post('/add/', async (request, response) => {

    const bill_details = request.body[0]
    const bill_products = request.body[1]

    const new_bill = new BillDetails(bill_details)

    await new_bill.save()

    let grand_total = 0

    for (let bill_pro of bill_products) {

        const selected_product = await Product.findById(bill_pro.product_ref)

        const amount_without_gst = bill_pro.quantity * selected_product.price

        const gst_amount = (amount_without_gst * selected_product.gst) / 100

        const sub_total_amount = amount_without_gst + gst_amount

        grand_total = grand_total + sub_total_amount

        const new_child_product = new BillProducts({
            product_ref: bill_pro.product_ref,
            bill_ref: new_bill._id,
            quantity: bill_pro.quantity,
            amount: amount_without_gst,
            gst_amount: gst_amount,
            sub_total: sub_total_amount
        })

        await new_child_product.save()
    }

    await BillDetails.findByIdAndUpdate(new_bill._id, {bill_amount: grand_total})

    response.json("Data Saved")
})

BillRouter.patch('/update/:id/', async (request, response) => {

    const {id} = request.params
    const bill_details = request.body[0]
    const bill_products = request.body[1]

    await BillDetails.findByIdAndUpdate(id, bill_details)

    let grand_total = 0

    for (let bill_pro of bill_products) {

        if (bill_pro.new === true) {

            const selected_product = await Product.findById(bill_pro.product_ref)

            const amount_without_gst = bill_pro.quantity * selected_product.price

            const gst_amount = (amount_without_gst * selected_product.gst) / 100

            const sub_total_amount = amount_without_gst + gst_amount

            grand_total = grand_total + sub_total_amount

            const new_child_product = new BillProducts({
                product_ref: bill_pro.product_ref,
                bill_ref: id,
                quantity: bill_pro.quantity,
                amount: amount_without_gst,
                gst_amount: gst_amount,
                sub_total: sub_total_amount
            })

            await new_child_product.save()
        }

        else if (bill_pro.update === true) {

            const selected_product = await Product.findById(bill_pro.product_ref)

            const amount_without_gst = bill_pro.quantity * selected_product.price

            const gst_amount = (amount_without_gst * selected_product.gst) / 100

            const sub_total_amount = amount_without_gst + gst_amount

            grand_total = grand_total + sub_total_amount

            await BillProducts.findByIdAndUpdate(bill_pro._id, {
                quantity: bill_pro.quantity,
                amount: amount_without_gst,
                gst_amount: gst_amount,
                sub_total: sub_total_amount
            })
        }

        else if (bill_pro.delete === true) {

            await BillProducts.findByIdAndDelete(bill_pro._id)
        }

        else {
            grand_total = grand_total + bill_pro.sub_total
        }
    }

    console.log(grand_total)

    await BillDetails.findByIdAndUpdate(id, {
        bill_amount: grand_total
    })

    response.json('Updated')
})

BillRouter.delete('/delete/:id/', async (request, response) => {

    const {id} = request.params

    const all_products = await BillProducts.find({bill_ref: id})

    for (let product of all_products) {
        await BillProducts.findByIdAndDelete(product._id)
    }

    await BillDetails.findByIdAndDelete(id)

    const bill_details = await BillDetails.find({})

    const all_bills = []

    for (let bill of bill_details) {

        const bill_products = await BillProducts.find({bill_ref: bill._id})

        const single_bill = [
            bill,
            bill_products
        ]

        all_bills.push(single_bill)
    }

    response.json(all_bills)
})

export default BillRouter