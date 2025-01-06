import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ProductsAdd = () => {

    const [category_ref, setCategoryRef] = useState('')
    const [product_name, setProductName] = useState('')
    const [code, setCode] = useState('')
    const [price, setPrice] = useState('')
    const [gst, setGst] = useState('')

    const [category, setCategory] = useState([])


    const category_options = category.map(c => <option key={c.id} value={c.id} >{c.category_name}</option>)


    const CreateProduct = () => {
        const product_data = {
            category_ref,
            product_name,
            code,
            price,
            gst
        }

        axios.post('http://127.0.0.1:8000/inventory/product/', product_data)
        .then(response => {
            console.log(response.data)
            // setCategory(response.data)
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/inventory/category/')
        .then(response => {
            console.log(response.data)
            setCategory(response.data)
        })
        .catch(error => console.log(error))
    }, [])


    return (
        <div>
            <form>
                <select value={category_ref} onChange={event => setCategoryRef(event.target.value)}>
                    <option value="">Select Category</option>
                    {category_options}
                </select>

                <br /><br />

                <label htmlFor="">Product Name</label>
                <input type="text" value={product_name} onChange={event => setProductName(event.target.value)} />

                <br /><br />

                <label htmlFor="">Code</label>
                <input type="text" value={code} onChange={event => setCode(event.target.value)} />

                <br /><br />

                <label htmlFor="">Price</label>
                <input type="text" value={price} onChange={event => setPrice(event.target.value)} />

                <br /><br />

                <label htmlFor="">Gst</label>
                <input type="text" value={gst} onChange={event => setGst(event.target.value)} />

                <br /><br />

                <input type="button" value={'Submit'} onClick={CreateProduct}/>


            </form>
        </div>
    )
}

export default ProductsAdd