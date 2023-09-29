import { GET_ACTIVITY_ERROR, GET_ACTIVITY_SUCCESS, SET_IS_FETCHING } from "../actions/actions";

const initialState = {
    activity: [],
    isFetching: false,
    error: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_FETCHING:
            return { ...state, isFetching: action.payload };
        case GET_ACTIVITY_SUCCESS:
            return { ...state, isFetching: false, activity: action.payload };
        case GET_ACTIVITY_ERROR:
            return { ...state, isFetching: false, error: action.payload };
        default:
            return state;
    }
};
export default reducer;