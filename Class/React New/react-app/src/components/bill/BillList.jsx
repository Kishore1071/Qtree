import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const BillList = () => {

    const navigate = useNavigate()


    const [bills, setBills] = useState([])


    const bill_list = bills.map((b, index) => {
        return (
            <tr key={b[0]._id}>
                <td>{index + 1}</td>
                <td>{b[0].customer_name}</td>
                <td>{b[0].bill_number}</td>
                <td>{(b[0].bill_date).slice(0, 10) }</td>
                <td>{b[0].bill_amount}</td>
                <td>
                    <button onClick={() => navigate('/bill/view/', { state: b })}>View</button>
                </td>
                <td> 
                    <button>Update</button>
                </td>
                <td>
                    <button>Delete</button>
                </td>
            </tr>
        )
    })


    useEffect(() => {
        axios.get('http://127.0.0.1:3000/bill/data/')
        .then(response => {
            console.log(response.data)
            setBills(response.data)
        })
        .catch(error => console.log(error))
    }, [])



    return (
        <div>

            <div>
                <button onClick={() => navigate('/bill/add/')}>Create Bill</button>
            </div>


            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Customer</th>
                        <th>Bill Number</th>
                        <th>Bill Date</th>
                        <th>Bill Amount</th>
                        <th>View</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {bill_list}
                </tbody>
            </table>
        </div>
    )
}

export default BillList