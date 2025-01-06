import { configureStore} from '@reduxjs/toolkit'
import studentSlice from './slices/studentSlice.js'


export const store = configureStore({
    devTools: true,
    reducer: {
        student_data: studentSlice
    }
})