import React from 'react';

export default class ActivitiesItem extends React.Component {
    constructor({ selectActivity }) {
        super(arguments);
    }

    render() {
        return (
            <div>
                <span> {this.props.id}. {this.props.item.id} {this.props.item.name} </span>
                <button onClick={(e) => this.props.selectActivity({
                    id: this.props.item.id,
                    name: this.props.item.name
                })}> Edit </button>
            </div>

        )
    }
} 
