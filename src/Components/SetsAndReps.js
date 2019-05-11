import React from 'react';

const sets = [2, 3, 4, 5];
const reps = [5, 6, 8, 10, 12, 15, 20];

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
    
            {/* <button onClick={this._generateSets}>Sets & Reps</button> */}
            <h4>Sets & Reps</h4>

            <h5>{this.props.setNum}</h5>
            <h5>{this.props.repNum}</h5> 
            </div>
        );
    }


    _generateSets = () => {
        const rand = sets[Math.floor(Math.random() * sets.length)];
        const rand2 = reps[Math.floor(Math.random() * reps.length)];
        console.log(rand);
        this.setState({
            sets: rand,
            reps: rand2
        });
    }




}


export default SetsAndReps;