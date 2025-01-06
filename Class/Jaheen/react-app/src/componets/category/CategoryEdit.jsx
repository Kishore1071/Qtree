import React, { useState} from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const CategoryEdit = () => {

    const navigate = useNavigate()

    const params = useParams()
    const {id} = params

    const location = useLocation()
    const category_data = location.state

    console.log(category_data)

    const [category_name, setCategoryName] = useState(category_data.category_name)
    const [is_food, setIsFood] = useState(category_data.is_food === true ? 'yes': 'no')

    const UpdateCategory = () => {
        const data = {
            category_name,
            is_food: is_food === 'yes' ? true : false
        }

        axios.patch(`http://127.0.0.1:8000/inventory/category/${id}/`, data)
        .then(response => navigate('/category/data/'))
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

                <input type="button" value="Submit" onClick={UpdateCategory} />
            </form>
        </div>
    )
}

export default CategoryEdit