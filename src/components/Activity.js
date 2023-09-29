import React from 'react';
import { connect } from 'react-redux';
import { getActivity } from '../actions/actions';

const Activity = (props) => {
    if (props.error) {
        return <h2>We got an error: {props.error}</h2>
    }
    if (props.isFetching) {
        return <h2>Fetching activity for ya!</h2>
    }
    return (
        <>
            <div>
                <h2>Activity: {props.activity}</h2>
            </div>
            <button onClick={() => props.getActivity()}>Get new activity</button>
        </>
    )
};
const mapStateToProps = state => {
    return {
        activity: state.activity,
        isFetching: state.isFetching,
        error: state.error
    };
};
export default connect(mapStateToProps, { getActivity })(Activity);