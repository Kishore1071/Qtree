import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Category = () => {

    const navigate = useNavigate()

    const [category, setCategory] = useState([])

    const DeleteCategory = (id) => {
        axios.delete(`http://127.0.0.1:8000/inventory/category/${id}/`)
        .then(response => {
            console.log(response.data)
            setCategory(response.data)
        })
        .catch(error => console.log(error))
    }

    const category_list = category.map((c, index) => {
        return (
            <tr key={c.id}>
                <td>{index + 1}</td>
                <td>{c.category_name}</td>
                <td>{c.is_food === true ? 'Yes' : 'No' }</td>
                <td>
                    <button onClick={() => navigate(`/category/edit/${c.id}/`, {state: c })}>Edit</button>
                </td>
                <td>
                    <button onClick={() => DeleteCategory(c.id)}>Delete</button>
                </td>
            </tr>
        )
    })

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

            <div>
                <button onClick={() => navigate('/category/add/')}>Add Category</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Category Name</th>
                        <th>Is Food</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {category_list}
                </tbody>
            </table>
        </div>
    )
}

export default Category