import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const BillAdd = () => {

    const navigate = useNavigate()

    const [products, setProducts] = useState([])
    const [customer_name, setCustomerName] = useState('')
    const [bill_number, setBillNumber]  = useState('')
    const [bill_date, setBillDate] = useState('')

    const [all_products, setAllProducts] = useState([])

    const products_options = products.map(p => <option key={p._id} value={p._id}>{p.product_name}</option>)

    const UpdateProduct = (event, index) => {
        const all_products_duplicate = [...all_products]

        all_products_duplicate[index].product_ref = event.target.value

        setAllProducts(all_products_duplicate)
    }

    const UpdateQuantity = (event, index) => {
        const all_products_duplicate = [...all_products]

        all_products_duplicate[index].quantity = event.target.value

        setAllProducts(all_products_duplicate)
    }

    const product_list = all_products.map((p, index) => {
        return (
            <div key={index}>
                <label htmlFor="">Product</label>
                <select name="" id="" onChange={event => UpdateProduct(event, index)}>
                    <option value="">select</option>
                    {products_options}
                </select>

                <label htmlFor="">Quantity</label>
                <input type="number" onChange={event => UpdateQuantity(event, index)}/>
            </div>
        )
    })

    const AddNewProduct = (event) => {
        event.preventDefault()

        let new_product = {
            product_ref: '',
            quantity: 0
        }

        let all_products_duplicate = [...all_products]

        all_products_duplicate.push(new_product)

        setAllProducts(all_products_duplicate)
    }

    const CreateBill = () => {

        const bill_data = [
            {
                customer_name,
                bill_number,
                bill_date
            },
            all_products
        ]

        axios.post('http://127.0.0.1:3000/bill/add/', bill_data)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    useEffect(() => {
        console.log(all_products)
    }, [all_products])

    useEffect(() => {

        axios.get('http://127.0.0.1:3000/product/data/')
        .then(response => {
            console.log(response.data)
            setProducts(response.data)
        })
        .catch(error => console.log(error))
    }, [])


    return (
        <div>
            <div>
                <button onClick={() => navigate('/bill/data/')}>Back</button>
            </div>


            <form>

                <label htmlFor="">Customer Name: </label>
                <input type="text" value={customer_name} onChange={event => setCustomerName(event.target.value)}/>

                <label htmlFor="">Bill Number: </label>
                <input type="text" value={bill_number} onChange={event => setBillNumber(event.target.value)}/>

                <label htmlFor="">Bill Date: </label>
                <input type="text" value={bill_date} onChange={event => setBillDate(event.target.value)}/>

                <div>
                    <button onClick={AddNewProduct}>Add New Product</button>
                </div>

                <div>
                    {product_list}
                </div>

                <div>
                    <input type="button" value={'Submit'} onClick={CreateBill} />
                </div>

            </form>
        </div>
    )

}

export default BillAdd