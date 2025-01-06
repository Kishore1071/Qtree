import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Category from './componets/category/Category'
import CategoryAdd from './componets/category/CategoryAdd'
import CategoryEdit from './componets/category/CategoryEdit'
import ProductsAdd from './componets/products/ProductsAdd'
import Products from './componets/products/Products'

const App = () => {
    return (
        <div>
            <Routes>

                <Route path='/category/data/' element={<Category />} />
                <Route path='/category/add/' element={<CategoryAdd />} />
                <Route path='/category/edit/:id/' element={<CategoryEdit />} />

                <Route path='/product/data/' element={<Products />} />
                <Route path='/product/add/' element={<ProductsAdd />} />

            </Routes>
        </div>
    )
}

export default App