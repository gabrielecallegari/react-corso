/* store è il file di settaggi di redux */

import {combineReducers, configureStore} from "@reduxjs/toolkit";
import prodottiReducer from "../reducers/prodottiReducer";
import carrelloReducer from "../reducers/carrelloReducer";

// reducer: file dove metti i settaggi dello stato
const rootReducers = combineReducers({
    prodottiReducer: prodottiReducer,
    carrelloReducer: carrelloReducer
})

// creo un tipo che si chiama ReducerType e lo riempio con il tipo ritornato
// dalla funzione rootReducers
export type ReducerType = ReturnType<typeof rootReducers>

//configureStore prende il "magazzino" di reducers e li mette in store
export const store = configureStore({
    reducer: rootReducers
})