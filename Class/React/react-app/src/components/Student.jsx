import React, { useState } from 'react'
import { newStudent } from '../redux-store/slices/studentSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Student = () => {

    const student_dispatch = useDispatch()
    const navigate = useNavigate()

    const [student_name, setStudentName] = useState('')

    const SubmitData = () => {
        student_dispatch(newStudent(student_name))
        setStudentName('')
    }

    return (
        <div>

            <button onClick={() => navigate('/student/list/')}>Student List</button>

            <form>
                <label htmlFor="">Student Name:</label>
                <input type="text" value={student_name} onChange={event => setStudentName(event.target.value)} />
                <input type="button" value={'Add'} onClick={SubmitData}/>
            </form>
        </div>
    )
}

export default Student