import { combineReducers } from 'redux'
import activities from './views/activities-list/ActivitiesListReducer';

export default combineReducers({activities: activities})
