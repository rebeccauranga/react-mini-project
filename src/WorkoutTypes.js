import React from 'react';
import SetsAndReps from './SetsAndReps';
import LowerBodyExercises from './LowerBodyExercises';
import UpperBodyExercises from './UpperBodyExercises';
import CardioExercises from './CardioExercises';


class WorkoutTypes extends React.Component {
    
    constructor(props) {
        super(props); 
        this.state = {
            exercises: []
        }
    }
    
    render() {
        return(
            <div>
                <button onClick={this._updateExercises}>
                    <LowerBodyExercises exercises={this.state.exercises}/>
                </button>
                <UpperBodyExercises />
                <CardioExercises /> 
            </div>
        );
    }
    
    // _generateRandomExercises = () => {
    //     const exercisesGen = []
    //     const length = 15;
        
    //     while (exercisesGen.length < 4) {
    //         const rand = Math.floor(Math.random() * length);
    //         if (!exercisesGen.includes(rand)) {
    //             exercisesGen.push(rand); 
    //         } 
    //     }
    //     console.log(exercisesGen);
    //     return exercisesGen;

    // }

    _updateExercises = () => {
        const exercisesGen = []
        const length = 15;
        
        while (exercisesGen.length < 4) {
            const rand = Math.floor(Math.random() * length);
            if (!exercisesGen.includes(rand)) {
                exercisesGen.push(rand); 
            } 
        }
        console.log(exercisesGen);

        this.setState({
            exercises: exercisesGen
        });
    }


}

export default WorkoutTypes;