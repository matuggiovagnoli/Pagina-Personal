import { createSlice } from "@reduxjs/toolkit";
import MensajeEspañol from '../../Lenguajes/es-ES.json'
import MensajeIngles from '../../Lenguajes/en-US.json'

// Idioma por defecto Español
const initialState = {
    locale: 'es-ES',
    messege: MensajeEspañol,
}

// Utilizamos redux para presionar sobre las banderas y cambiar el idioma en App.js
export const lenguajeSlice = createSlice ({
    name: 'lenguaje',
    initialState,
    reducers: {
        idiomaEspañol: (state, action) => {
            state.locale = 'es-ES';
            state.messege = MensajeEspañol
        },
        idiomaIngles: (state, action) =>{
            state.locale = 'en-US';
            state.messege = MensajeIngles
        }
    }

})

export const { idiomaEspañol, idiomaIngles } = lenguajeSlice.actions
export default lenguajeSlice.reducer