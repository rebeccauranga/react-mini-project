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
    
            <button onClick={this._generateSets}>Sets</button>
            <h5>{this.state.sets}</h5>
            <button onClick={this._generateReps}>Reps</button>
            <h5>{this.state.reps}</h5>
            </div>
        );
    }


    _generateSets = () => {
        const rand = sets[Math.floor(Math.random() * sets.length)];
        console.log(rand);
        this.setState({
            sets: rand
        });
    }

    _generateReps = () => {
        const rand = reps[Math.floor(Math.random() * reps.length)];
        console.log(rand);
        this.setState({
            reps: rand
        });
    }




}


export default SetsAndReps;