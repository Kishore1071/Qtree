import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const BillView = () => {

    const navigate = useNavigate()

    const [products, setProducts] = useState([])

    const location = useLocation()

    const bill_data = location.state

    console.log(bill_data)

    const bill_product_list = bill_data[1].map((p, index) => {

        const product_data = products.find(pro => pro._id = p.product_ref)

        console.log(product_data, 'product_data')

        return (
            <tr key={p._id}>

                <td>{index + 1}</td>
                <td>{products.length > 0 ? product_data.product_name : null}</td>
                <td>{products.length > 0 ? product_data.code : null}</td>
                <td>{products.length > 0 ? product_data.price : null}</td>
                <td>{p.quantity}</td>
                <td>{p.amount}</td>
                <td>{products.length > 0 ? product_data.gst : null}</td>
                <td>{p.gst_amount}</td>
                <td>{p.sub_total}</td>
            </tr>
        )
    })

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

            <div>
                <p>Customer Name: {bill_data[0].customer_name}</p>
                <p>Bill Number: {bill_data[0].bill_number}</p>
                <p>Bill Date: {bill_data[0].bill_date}</p>
                <p>Bill Amount: {bill_data[0].bill_amount}</p>
            </div>


            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Product</th>
                        <th>Code</th>
                        <th>Price/Item</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                        <th>Gst %</th>
                        <th>Gst Amount</th>
                        <th>Sub Total</th>
                    </tr>
                </thead>
                <tbody>
                    {bill_product_list}
                </tbody>
            </table>
        </div>
    )
}

export default BillView