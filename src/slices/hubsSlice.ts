import { createSlice } from "@reduxjs/toolkit";

export const hubsSlice = createSlice({
    name: 'hubs',
    initialState: {},
    reducers: {
        fetchHubsRequest: state => ({
            ...state,
            isLoading: true
        }),
        fetchHubsSuccess: (state, {payload}) => ({
            ...state,
            hubs: payload.data,
            isLoading: false
        }),
        fetchHubsFailed: state => ({
            ...state,
            isLoading: false
        })
    }
})

export const {fetchHubsRequest, fetchHubsSuccess, fetchHubsFailed} = hubsSlice.actions;

export const hubsReducer = hubsSlice.reducer;