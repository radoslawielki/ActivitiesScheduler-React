import React from 'react';

export default function ActivitiesItem (props) {
    return (
        <div> {props.id}. {props.item.id} {props.item.name} </div>
    )
}
