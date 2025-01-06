import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({

    category_ref: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    product_name: {
        type: String,
        required: true
    },
    code: String,
    price: Number,
    gst: Number
})

export const Product = mongoose.model('product', ProductSchema)