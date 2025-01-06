import { createSlice } from "@reduxjs/toolkit";


const studentSlice = createSlice({
    name: 'student_data',
    initialState: [],
    reducers: {
        newStudent(state, action) {
            state.push(action.payload)
            return state
        }
    }
})


export const { newStudent } = studentSlice.actions

export default studentSlice.reducer