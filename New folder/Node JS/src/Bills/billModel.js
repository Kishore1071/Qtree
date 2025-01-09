import mongoose from "mongoose";

const BillDetailsSchema = mongoose.Schema({
    customer_name: String,
    bill_number: {
        type: String,
        required: true
    },
    bill_date: {
        type: Date,
        required: true
    },
    bill_amount: Number
})

export const BillDetails = mongoose.model('billdetails', BillDetailsSchema)


const BillProductsSchema = mongoose.Schema({
    product_ref : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    bill_ref: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BillDetails'
    },
    quantity: {
        type: Number,
        required: true
    },
    amount: Number,
    gst_amount: Number,
    sub_total: Number
})

export const BillProducts = mongoose.model('billproducts', BillProductsSchema)