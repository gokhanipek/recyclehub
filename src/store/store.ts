import { configureStore } from "@reduxjs/toolkit";
import { hubsReducer } from "../slices/hubsSlice";

export const store = configureStore({
    reducer: {
        hubsState: hubsReducer
    }
})

export type AppDispatch = typeof store.dispatch