import axios from 'axios';

export const GET_ACTIVITY = "GET_ACTIVITY";
export const GET_ACTIVITY_SUCCESS = "GET_ACTIVITY_SUCCESS";
export const GET_ACTIVITY_ERROR = "GET_ACTIVITY_ERROR";
export const SET_IS_FETCHING = "SET_IS_FETCHING";

export const getActivity = () => dispatch => {
    dispatch(setIsFetching(true));
    axios.get('https://www.boredapi.com/api/activity')
        .then((res) => {
            console.log(res);
            dispatch(getActivitySuccess(res.data.activity))
        })
        .catch((err) => {
            console.log(err)
        })
    return { type: GET_ACTIVITY, payload: { data: 'hi' } }
}

const setIsFetching = (isFetching) => {
    return { type: SET_IS_FETCHING, payload: isFetching }
}

const getActivitySuccess = (activity) => {
    return { type: GET_ACTIVITY_SUCCESS, payload: activity }
}