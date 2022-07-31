import { createSelector } from "reselect";
import { HubsResponse } from "../types/types";

interface RootState {
    hubsState: HubsState;
}

interface HubsState {
    isLoading: boolean;
    hubs: HubsResponse[];
}


export const getHubsState = (state: RootState): HubsState => state.hubsState;


export const getHubs = createSelector(
    getHubsState,
    (hubsState: any): HubsResponse[] | undefined => hubsState?.hubs
);

export const getIsLoading = createSelector(
    getHubsState,
    (hubsState: any): boolean => hubsState?.isLoading
);

