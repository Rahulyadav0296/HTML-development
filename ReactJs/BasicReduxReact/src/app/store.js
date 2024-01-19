import { configureStore } from "@reduxjs/toolkit";
import  todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});

// import { configureStore, Tuple } from '@reduxjs/toolkit'
// import todoReducer from '../features/todo/todoSlice'

// export const store = configureStore({
//     reducer: todoReducer
// })


// configureStore is a standard method for  creating a Redux store.
// it uses the  low-level redux core createStore method internally 
// Combining the slice reducers into the root reducer 
