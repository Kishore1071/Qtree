import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CategoryAdd = () => {

    const navigate = useNavigate()

    const [category_name, setCategoryName] = useState('')
    const [description, setDescription] = useState('')

    const CreateCategory = () => {
        const category_data = {
            category_name,
            description
        }

        axios.post('http://127.0.0.1:3000/category/add/', category_data)
        .then(response => navigate('/category/data/'))
        .catch(error => console.log(error))
    }

    return (
        <div>
            <div>
                <button onClick={() => navigate('/category/data/')}>Category List</button>
            </div>

            <form>
                <label htmlFor="">Category Name: </label>
                <input type="text" value={category_name} onChange={event => setCategoryName(event.target.value)} />

                <br /><br />

                <label htmlFor="">Description</label>
                <input type="text" value={description} onChange={event => setDescription(event.target.value)} />

                <br /><br />

                <input type="button" value="Submit" onClick={CreateCategory} />
            </form>
        </div>
    )
}

export default CategoryAdd