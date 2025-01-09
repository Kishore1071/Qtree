import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Product = () => {

    const navigate = useNavigate()

    const [products, setProducts] = useState([])
    const [category, setCategory] = useState([])

    const product_list = products.map((p, index) => {

        const category_details = category.find(c => c._id === p.category_ref)

        return (
            <tr key={p._id}>
                <td>{index + 1}</td>
                <td>{p.product_name}</td>
                <td>{p.code}</td>
                <td>{category_details.category_name && category_details.category_name}</td>
                <td>{p.price}</td>
                <td>{p.gst}</td>
                <td>
                    <button>Update</button>
                    <button>Delete</button>
                </td>
            </tr>
        )
    })




    useEffect(() => {

        axios.get('http://127.0.0.1:3000/category/data/')
        .then(response => {
            setCategory(response.data)
        })
        .catch(error => console.log(error))
    }, [])

    useEffect(() => {

        if (category.length > 0 ) {

            axios.get('http://127.0.0.1:3000/product/data/')
            .then(response => {
                console.log(response.data)
                setProducts(response.data)
            })
            .catch(error => console.log(error))
        }
        
    }, [category])


    return (
        <div>

            <div>
                <button onClick={() => navigate('/product/add/')}>Add Product</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Product Name</th>
                        <th>Code</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Gst</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {product_list}
                </tbody>
            </table>
        </div>
    )
}

export default Product