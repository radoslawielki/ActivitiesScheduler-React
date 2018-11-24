import { connect } from 'react-redux';
import { addActivity } from './ActivitiesListActions';
import ActivitiesListComponent from './ActivitiesListComponent'

const getActivities = (activitiesState) => {
    return activitiesState.activitiesList;
}
const getSelectedActivity = (activitiesState) => {
    return activitiesState.selected;
}

const mapStateToProps = state => ({
    activities: getActivities(state.activities),
    selected: getSelectedActivity(state.activities)
})

const mapDispatchToProps = dispatch => {
    return ({
        addActivity: activity => dispatch(addActivity(activity))
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActivitiesListComponent)