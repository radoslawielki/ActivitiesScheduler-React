import React from 'react';
import ActivitiesItem from './activities-item';

export default class ActivitiesListComponent extends React.Component {
    constructor({activities, selectActivity, addActivity}) {
        super(arguments);
    }
    add() {
        this.props.addActivity({
            id: '1', 
            name: '1234'
        });
    }
    render() {
        return (
            <div>
                <button onClick={(e) => this.add(e)}> dodaj </button>
                <div> Lista </div> 
                <div>
                   {(this.props.activities || []).map((item, idx) => <ActivitiesItem item={item} id={idx + 1} />)}
                </div>
            </div>
        )
    }
} 