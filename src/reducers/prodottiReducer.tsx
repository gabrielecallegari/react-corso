import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ProdottiInterface {
    prodotti: any
}

const initialState: ProdottiInterface = {
    prodotti: []
}

const prodottiSlice = createSlice({
    name: "prodottiReducer",
    initialState: initialState,
    // dentro PayloadAction si mette il tipo della variabile da settare
    reducers: {
        setProdotti(state, action: PayloadAction<any>) {
            // prendi quello che ti passa action e buttalo in state.prodotti
            state.prodotti = action.payload
        }
    }
})

// qui nelle graffe passo tutte le funzioni che lavorano sui prodotti (per ora solo la set)
export const {setProdotti} = prodottiSlice.actions

export default prodottiSlice.reducer