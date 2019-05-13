import React, { Component } from 'react';

class Exercise extends Component {
    state = { 
        class: 'working'
    }
    render (props) {
        return (
            <div>
                <div className={this.state.class}>
                    {this.props.name}
                </div> 
                <button className={"done"} onClick={this._changeTextState}>Done</button>
            </div>
        );
    }
    _changeTextState = () => {
        this.setState({
            class: 'completed'
        });
    }

}


export default Exercise