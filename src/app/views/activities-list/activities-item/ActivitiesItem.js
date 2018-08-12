import React from 'react';

export function ActivitiesItem (props) {
    return (
        <div> {props.id}. {props.item.id} {props.item.name} </div>
    )
}
