import { combineReducers, configureStore } from "@reduxjs/toolkit";
import prodottiReducer from "../reducers/prodottiReducer";

const rootReducers = combineReducers({
  prodottiReducer: prodottiReducer,
});

export type ReducerType = ReturnType<typeof rootReducers>;

export const store = configureStore({
  reducer: rootReducers,
});
