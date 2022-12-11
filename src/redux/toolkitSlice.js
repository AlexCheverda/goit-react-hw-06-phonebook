import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, filterContact } from './actions';
import { INITIAL_CONTACTS } from 'data/data';

const toolkitSlice = createSlice( options: {
    name: 'toolkit',
    INITIAL_CONTACTS: {
        type: '',
        todos: [addContact, deleteContact, filterContact]
    },
    reducers: {
        increment(state) {
            state.count = state.count + 1
        },
        decrement(state) {
            state.count = state.count - 1
        },
        addTodo(state, action) {
            state.todos.push(action.payload)
        },
        removeLastTodo(state) {
            state.todos.pop()
        }
    }
});

export default toolkitSlice.reducer;
export const { increment, decrement, addTodo, removeLastTodo } = toolkitSlice.actions;