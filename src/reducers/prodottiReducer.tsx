import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ProdottiInterface {
  prodotti: any[];
}

const initialState: ProdottiInterface = {
  prodotti: [],
};

const prodottiSlice = createSlice({
  name: "prodottiReducer",
  initialState: initialState,
  reducers: {
    setProdotti(state, action: PayloadAction<any>) {
      state.prodotti = action.payload;
    },
  },
});

export const { setProdotti } = prodottiSlice.actions;
export default prodottiSlice.reducer
