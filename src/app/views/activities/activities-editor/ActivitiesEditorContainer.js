import { connect } from 'react-redux';
import { addActivity, selectActivity, editActivity } from './ActivitiesEditorActions';
import ActivitiesEditorComponent from './ActivitiesEditorComponent'

const getSelectActivity = (activitiesState) => {
    return activitiesState.selected;
}

const mapStateToProps = state => ({
    selectedActivity: getSelectActivity(state.activities)
})

const mapDispatchToProps = dispatch => {
    return ({
        addActivity: activity => dispatch(addActivity(activity)),
        selectActivity: activty => dispatch(selectActivity(activty)),
        editActivity: activty => dispatch(editActivity(activty))
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActivitiesEditorComponent)