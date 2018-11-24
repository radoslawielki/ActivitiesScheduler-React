export default (state = {activitiesList: [], selected: {id: '', name: ''}}, action) => {
    switch (action.type) {
        case 'ADD_ACTIVITY': {
            let id = (state.activitiesList.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id, 0) + 1);
            return {
                selected: state.selected, 
                activitiesList: [...state.activitiesList, {
                    id: id,
                    name: action.activity.name
                }]
            }
        }
        case 'EDIT_ACTIVITY': {
            return {
                selected: state.selected, 
                activitiesList: state.activitiesList.map((activity) => {
                  if(activity.id === action.activity.id) {
                      return action.activity
                  }  
                  return activity;
                })
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