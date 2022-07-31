import { HubsState, HubsResponse } from "../types/types";
import { executeRequest } from "./executeRequest";

export const fetchHubsService = ():Promise<HubsState> => {
    const request = {
        method: "GET",
        url: 'hubs'
    }
    return executeRequest(request);
}