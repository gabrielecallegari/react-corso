import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CarrelloInterface {
    prodotti: any
}

const initialState: CarrelloInterface = {
    prodotti: []
}

const carrelloSlice = createSlice({
    name: "carrelloReducer",
    initialState: initialState,
    // dentro PayloadAction si mette il tipo della variabile da settare
    reducers: {
        addCarrello(state, action: PayloadAction<any>) {
            // prendi quello che ti passa action e buttalo in state.prodotti
            state.prodotti.push(action.payload)
        },
        clearCarrello(state, action:PayloadAction<any>) {
            state.prodotti = []
        }
    }
})

// qui nelle graffe passo tutte le funzioni che lavorano sui prodotti (per ora solo la set)
export const {addCarrello, clearCarrello} = carrelloSlice.actions

export default carrelloSlice.reducer