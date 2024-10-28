import { createSlice } from '@reduxjs/toolkit';


const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        list: [],
        filter: 'all'
    },
    reducers: {
        addNewTask: (state, action) => {
            state.list.push({
                id: new Date().toISOString(),
                task: action.payload,
                completed: false
            })
        },
        completeTask: (state, action) => {

        },
        deleteTask: (state, action) => {
            state.list = state.list.filter((list) => action.payload !== list.id)
        }
    }
})

export default todoSlice.reducer;
export const { addNewTask, completeTask, deleteTask } = todoSlice.actions;