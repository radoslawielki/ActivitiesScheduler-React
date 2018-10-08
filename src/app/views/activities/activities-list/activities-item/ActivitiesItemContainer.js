import { connect } from 'react-redux';
import ActivitiesItemComponent from './ActivitiesItemComponent'
import { selectActivity } from './ActivitiesItemActions';

const mapDispatchToProps = dispatch => {
    return ({
        selectActivity: activty => dispatch(selectActivity(activty))
    })
}

const mapStateToProps = state => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActivitiesItemComponent)