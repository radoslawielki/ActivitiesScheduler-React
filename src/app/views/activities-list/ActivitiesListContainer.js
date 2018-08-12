import { connect } from 'react-redux';
import { selectActivity, addActivity } from './ActivitiesListActions';
import ActivitiesListComponent from './ActivitiesListComponent'

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
)(ActivitiesListComponent)