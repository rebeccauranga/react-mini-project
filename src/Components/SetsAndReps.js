import React from 'react';

class SetsAndReps extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sets: '',
            reps: ''
        }
    }

    render() {
        return(
            <div>
                <h4>Sets & Reps</h4>
                <h5>Sets: {this.props.setNum}</h5>
                <h5>Reps: {this.props.repNum}</h5> 
            </div>
        );
    }


}


export default SetsAndReps;