import {configureStore} from '@reduxjs/toolkit'
import todoSlice from './slices/todoSlice'

const todoStore = configureStore({
    reducer: {
        todos: todoSlice,
    }
})

export default todoStore;