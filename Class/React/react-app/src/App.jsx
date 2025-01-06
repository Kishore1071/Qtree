import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { store } from './redux-store/store'
import { Provider } from 'react-redux'
import Student from './components/Student'
import StudentList from './components/StudentList'

const App = () => {
    return (

        <Provider store={store}>
            <div>
                <Routes>
                    <Route path='/student/' element={<Student />} />
                    <Route path='/student/list/' element={<StudentList />} />
                </Routes>
            </div>
        </Provider>
        
    )
}

export default App