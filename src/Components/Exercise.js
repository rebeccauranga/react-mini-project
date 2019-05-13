import React, { Component } from 'react';

class Exercise extends Component {
    state = { 
        completed: false
    }
    render (props) {
        const classVis = this.state.completed ? 'completed' : 'workout'
        return (
            <div>
                <div className={`${classVis}`}>
                    {this.props.name}
                </div> 
                <button className={"done"} onClick={this._changeTextState}>Done</button>
            </div>
        );
    }
    _changeTextState = () => {
        this.setState({
            completed: !this.state.completed
        });
    }

}


export default Exercise