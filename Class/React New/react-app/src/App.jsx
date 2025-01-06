import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Category from './components/category/Category'
import CategoryAdd from './components/category/CategoryAdd'
import CategoryEdit from './components/category/CategoryEdit'

import Product from './components/product/Product'
import ProductAdd from './components/product/ProductAdd'
import ProductEdit from './components/product/ProductEdit'

import BillList from './components/bill/BillList'
import BillView from './components/bill/BillView'
import BillAdd from './components/bill/BillAdd'

const App = () => {

    return (
        <div>

            <Routes>

                <Route path={'/category/data/'} element={<Category />}/>
                <Route path={'/category/add/'} element={<CategoryAdd />}/>
                <Route path={'/category/edit/:id/'} element={<CategoryEdit />}/>

                <Route path={'/product/data/'} element={<Product />}/>
                <Route path={'/product/add/'} element={<ProductAdd />}/>
                <Route path={'/product/edit/:id/'} element={<ProductEdit />}/>

                <Route path={'/bill/data/'} element={<BillList />}/>
                <Route path={'/bill/view/'} element={<BillView />}/>
                <Route path={'/bill/add/'} element={<BillAdd />}/>
                {/* <Route path={'/product/edit/:id/'} element={<ProductEdit />}/> */}

            </Routes>

        </div>
    )

}

export default App