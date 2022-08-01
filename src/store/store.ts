import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import { hubsReducer } from "../slices/hubsSlice";

export const store = configureStore({
    reducer: {
        hubsState: hubsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
})

export type AppDispatch = typeof store.dispatch