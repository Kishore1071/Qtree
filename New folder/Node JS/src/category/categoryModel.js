import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({

    category_name: String,
    description: String
})

export const Category = mongoose.model('category', CategorySchema)