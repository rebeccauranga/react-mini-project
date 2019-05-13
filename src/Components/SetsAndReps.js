import React from 'react';

class SetsAndReps extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          
        }
    }

    render() {
        return(
            <div>
                <h5>Sets: {this.props.setNum}</h5>
                <h5>Reps: {this.props.repNum}</h5> 
            </div>
        );
    }


}


export default SetsAndReps;