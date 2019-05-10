import React from 'react';

class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            number: '' || props.countdown
        }
    }

    render() {
        return(
            <div>
                <h3>{this.state.number}</h3>
                <button onClick={this._startInterval}>Rest Timer</button>
            </div>
        );
    }

    _startInterval = () => {
        let interval = 1
            setInterval(() => {
                    if(interval === 1) {
                        this.setState({
                            number: this.state.number - 1
                        });
                    } if (this.state.number < 0) {
                        interval = 0
                    } if (interval === 0) {
                        this.setState({
                            number: 'Time\'s Up!'
                        });
                    }
                }, 1000)
            } 



}




export default Timer;