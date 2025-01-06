import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Products = () => {

    const [product_data, setProductData] = useState([])
    const [category, setCategory] = useState([])

    const product_list = product_data.map((product, index) => {

        const category_data = category.find(c => c.id === product.category_ref)

        return (
            <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.product_name}</td>
                <td>{category_data ? category_data.category_name : "No Reference"}</td>
                <td>{product.code}</td>
                <td>{product.price}</td>
                <td>{product.gst}</td>
            </tr>
        )
    })

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/inventory/product/')
        .then(response => {
            console.log(response.data)
            setProductData(response.data)
        })
        .catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/inventory/category/')
        .then(response => {
            console.log(response.data)
            setCategory(response.data)
        })
        .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Product</th>
                        <th>Category</th>
                        <th>Code</th>
                        <th>Price</th>
                        <th>Gst (%)</th>
                    </tr>
                </thead>

                <tbody>
                    {product_list}
                </tbody>
            </table>
        </div>
    )
}

export default Products