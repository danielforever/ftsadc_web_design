import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from './api/apiSlice';
import counterReducer from '../features/counter/counterSlice';

//import reducers
export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        counter: counterReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})