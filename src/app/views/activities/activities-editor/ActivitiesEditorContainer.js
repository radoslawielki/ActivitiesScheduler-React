import { connect } from 'react-redux';
import { addActivity } from './ActivitiesEditorActions';
import ActivitiesEditorComponent from './ActivitiesEditorComponent'

const getSelectActivity = (activitiesState) => {
    return activitiesState.selectedActivity;
}

const mapStateToProps = state => ({
    selectedActivity: getSelectActivity(state.activities)
})

const mapDispatchToProps = dispatch => {
    return ({
    addActivity: activity => dispatch(addActivity(activity))
})
} 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActivitiesEditorComponent)