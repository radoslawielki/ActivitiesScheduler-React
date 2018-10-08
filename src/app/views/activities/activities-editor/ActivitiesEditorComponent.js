import React from 'react';

export default class ActivitiesEditorComponent extends React.Component {
    constructor({ selectedActivity, addActivity }) {
        super(arguments);
        this.state = { value: '' };
        this.currnentIdx = 2;
        this.value = '';
        this.handleChange = this.handleChange.bind(this);
    }
    add() {
        this.props.addActivity({
            id: this.currnentIdx++,
            name: this.state.value
        });
    }
    handleChange(event) {
        // this.state.value = event.target.value;
        this.setState({ value: event.target.value });
    }
    componentWillUpdate() {
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <button onClick={(e) => this.add(e)}> Add </button>
            </div>  
        )
    }
} 