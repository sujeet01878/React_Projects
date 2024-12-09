import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}

// How can make a slice in react-redux

export const todoSlice = createSlice({
    name: 'todo',
    initialState,

    // Reducers are functionality of react-redux, in which have property and function.
    // Property have two components such as state and action.
    // Function can be created outside from the object

    // In react contextAPI's, we were passing body of fucntion but in redux, we will pass 
    // definition and body of function also.

    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),           // Now it have new id which is in string formate 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => 
            todo.id !== action.payload)
        },
    }
})

// ****** this is the way to export reducers in react-redux

// here individual functinalities are exported, because it will be use in Components 
export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer   // it will take the list of created reducers