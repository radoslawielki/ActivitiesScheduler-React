export default (state = {activitiesList: [], selected: {id: '', name: ''}}, action) => {
    switch (action.type) {
        case 'ADD_ACTIVITY': {
            return {
                selected: state.selected, 
                activitiesList: [...state.activitiesList, {
                    id: action.activity.id,
                    name: action.activity.name
                }]
            }
        }
        case 'SELECT_ACTIVITY': {
            return {
                activitiesList: [...state.activitiesList],
                selected: {
                    id: action.activity.id,
                    name: action.activity.name
                }
            }
        }
        default: return state 
    }
}