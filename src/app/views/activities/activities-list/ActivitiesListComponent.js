import React from 'react';
import ActivitiesItem from './activities-item';

export default class ActivitiesListComponent extends React.Component {
    constructor({ activities }) {
        super(arguments);
    }
    render() {
        return (
            <div>
                <div> List </div>
                <div>
                    {(this.props.activities || []).map((item, idx) => <ActivitiesItem item={item} id={idx + 1} />)}
                </div>
            </div>
        )
    }
} 