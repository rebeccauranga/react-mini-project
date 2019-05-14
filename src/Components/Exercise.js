import React, { Component } from 'react';

class Exercise extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            done: this.props.completed
        }
    }
    render () {
        console.log(this.state.done)
        const classVis = this.state.done ? 'completed' : 'workout'
        return (
            <div>
                <div className={`${classVis}`}>
                    {this.props.name}
                </div> 
                <div className={"doneBtn"}>
                    <button className={"done"} onClick={this._changeTextState}>Done</button>
                </div>
            </div>
        );
    }
    _changeTextState = () => {
        this.setState({
            done: !this.state.done
        });
    }

}


export default Exercise