import { configureStore } from '@reduxjs/toolkit';
import lenguajeReducer from '../features/leng/lenguajeSlice';

export const store = configureStore ({
    reducer: {
        lenguaje: lenguajeReducer,
    },
})