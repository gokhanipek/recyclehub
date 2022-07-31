import { fetchHubsService } from "../service/fetchHubs";
import { fetchHubsFailed, fetchHubsRequest, fetchHubsSuccess } from "../slices/hubsSlice";

export const fetchHubsThunk = () => async dispatch => {
    dispatch(fetchHubsRequest());
    fetchHubsService()
        .then(response => {
            return dispatch(fetchHubsSuccess(response))
        })
        .catch(err => dispatch(fetchHubsFailed()));
};
