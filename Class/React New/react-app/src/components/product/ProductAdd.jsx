import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ProductAdd = () => {

    const navigate = useNavigate()

    const [category_ref, setCategory_ref] = useState('')
    const [product_name, setProductName] = useState('')
    const [code, setCode] = useState('')
    const [price, setPrice] = useState('')
    const [gst, setGst] = useState('')

    const [category, setCategory] = useState([])

    const category_option = category.map(c => <option key={c._id} value={c._id}>{c.category_name}</option>)

    const CreateProduct = () => {

        const product_data = {
            category_ref,
            product_name,
            code,
            price,
            gst
        }

        axios.post('http://127.0.0.1:3000/product/add/', product_data)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
    }
    
    useEffect(() => {
        axios.get('http://127.0.0.1:3000/category/data/')
        .then(response => {
            console.log(response.data)
            setCategory(response.data)
            setCategory_ref(response.data.length > 0 ? response.data[0]._id : '')
        })
        .catch(error => console.log(error))
    }, [])

    return (
        <div>

            <div>
                <button onClick={() => navigate('/product/data/')}>Product List</button>
            </div>

            <form>
                <label htmlFor="">Category: </label>
                <select value={category_ref} onChange={event => setCategory_ref(event.target.value)}>
                    {/* <option value="">Select</option> */}
                    {category_option}
                </select>

                <br /><br />

                <label htmlFor="">Product Name</label>
                <input type="text" value={product_name} onChange={event => setProductName(event.target.value)} />

                <br /><br />

                <label htmlFor="">Code</label>
                <input type="text" value={code} onChange={event => setCode(event.target.value)} />

                <br /><br />

                <label htmlFor="">Price</label>
                <input type="number" value={price} onChange={event => setPrice(event.target.value)} />

                <br /><br />

                <label htmlFor="">Gst</label>
                <input type="number" value={gst} onChange={event => setGst(event.target.value)} />

                <br /><br />

                <input type="button" value="Submit" onClick={CreateProduct} />
            </form>

        </div>
    )
}

export default ProductAdd