import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const CategoryEdit = () => {

    const navigate = useNavigate()

    const params = useParams()

    const {id} = params

    const location = useLocation()

    const category_data = location.state

    console.log(category_data)

    const [category_name, setCategoryName] = useState(category_data.category_name)
    const [description, setDescription] = useState(category_data.description)

    const UpdateCategory = () => {
        const category_data = {
            category_name,
            description
        }

        axios.patch(`http://127.0.0.1:3000/category/update/${id}/`, category_data)
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

                <input type="button" value="Submit" onClick={UpdateCategory} />
            </form>
        </div>
    )
}

export default CategoryEdit