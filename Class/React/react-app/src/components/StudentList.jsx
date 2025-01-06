import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const StudentList = () => {

    const navigate = useNavigate()

    const student_details = useSelector(state => state.student_data)

    const student_list = student_details.map((s, index) => <li key={index}>{s}</li>)

    return (
        <div>

            <button onClick={() => navigate('/student/')}>Add Student</button>
            <h1>StudentList</h1>
            <ul>
                {student_list}
            </ul>
        </div>
    )
}

export default StudentList