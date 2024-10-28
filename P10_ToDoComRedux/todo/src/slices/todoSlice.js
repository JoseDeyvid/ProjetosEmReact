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
            state.list.map((task) => {
                if(task.id === action.payload) {
                    task.completed = !task.completed;
                }
            })
        },
        deleteTask: (state, action) => {
            state.list = state.list.filter((list) => action.payload !== list.id);
        },
        changeFilter: (state, action) => {
            state.filter = action.payload;
        }
    }
})

export default todoSlice.reducer;
export const { addNewTask, completeTask, deleteTask, changeFilter } = todoSlice.actions;