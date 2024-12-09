import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../02_Features/Todo/TodoSlice';

export const store = configureStore({
    reducer: todoReducer
})