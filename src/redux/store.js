import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';

// changed reducer to object
const store = configureStore({
    reducer: {
        user: userReducer,
    }
});

export default store;