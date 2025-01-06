import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BillAdd = () => {

    const navigate = useNavigate()

    const [customer_name, setCustomerName] = useState('')
    const [bill_number, setBillNumber]  = useState('')
    const [bill_date, setBillDate] = useState('')

    const [all_products, setAllProducts] = useState([])

    const product_list = all_products.map((p, index) => {
        return (
            <div>
                <label htmlFor="">Product</label>
                <input type="text" />

                <label htmlFor="">Quantity</label>
                <input type="number" />
            </div>
        )
    })

    const AddNewProduct = (event) => {
        event.preventDefault()

        let new_product = {
            product: '',
            quantity: 0
        }

        let all_products_duplicate = [...all_products]

        all_products_duplicate.push(new_product)

        setAllProducts(all_products_duplicate)
    }

    useEffect(() => {
        console.log(all_products)
    }, [all_products])


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

            </form>
        </div>
    )

}

export default BillAdd