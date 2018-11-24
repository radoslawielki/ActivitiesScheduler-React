import React from 'react';

export default class ActivitiesEditorComponent extends React.Component {
    constructor({ selectedActivity, addActivity, editActivity, selectActivity }) {
        super(arguments);
        this.state = { value: (selectedActivity && selectedActivity.name) || '' };
        this.currnentIdx = selectedActivity && selectedActivity.id;
    }
    add() {
        let params = {
            name: this.state.value,
            id: this.props.selectedActivity && this.props.selectedActivity.id
        };
        if (params.id) {
            this.props.editActivity(params);
        } else {
            this.props.addActivity(params);
        }
        this.currnentIdx = '';
        this.setState({ value: '' });
        this.props.selectActivity({
            name: '',
            id: ''
        })
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this._isSelectedActivityChanged(prevProps)) {
            this.setState({ value: this.props.selectedActivity.name });
        }
    }
    _isSelectedActivityChanged(prevProps) {
        return (prevProps.selectedActivity.name !== this.props.selectedActivity.name ||
            prevProps.selectedActivity.id !== this.props.selectedActivity.id);
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
                <button onClick={(e) => this.add(e)}> Add </button>
            </div>
        )
    }
} 