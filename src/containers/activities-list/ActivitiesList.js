import { connect } from 'react-redux';
import React from 'react'
import { selectActivity } from '../../actions';
import { ActivitiesList } from './../../components/activities-list/ActivitiesList'
import { addActivity } from './../../actions';

const getActivities = (activitiesState) => {
    return activitiesState.activitiesList;
}

const mapStateToProps = state => ({
    activities: getActivities(state.activities)
})

const mapDispatchToProps = dispatch => {
    return ({
    selectActivity: activty => dispatch(selectActivity(activty)), 
    addActivity: activity => dispatch(addActivity(activity))
})
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActivitiesList)