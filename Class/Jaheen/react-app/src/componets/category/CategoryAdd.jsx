import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CategoryAdd = () => {

    const navigate = useNavigate()

    const [category_name, setCategoryName] = useState('')
    const [is_food, setIsFood] = useState('')

    const CreateCategory = () => {

        const category_data = {
            category_name,
            is_food: is_food === 'yes' ? true : false
        }

        axios.post('http://127.0.0.1:8000/inventory/category/', category_data)
        .then(response => {
            navigate('/category/data/')
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <div>
                <button onClick={() => navigate('/category/data/')}>Category List</button>
            </div>

            <form>
                <label htmlFor="">Category Name</label>
                <input type="text" value={category_name} onChange={event => setCategoryName(event.target.value)} />

                <br /><br />

                <label htmlFor="">Is Food</label>
                <select value={is_food} onChange={event => setIsFood(event.target.value)}>
                    <option value="">select</option>
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                </select>

                <br /><br />

                <input type="button" value="Submit" onClick={CreateCategory} />
            </form>
        </div>
    )
}

export default CategoryAdd