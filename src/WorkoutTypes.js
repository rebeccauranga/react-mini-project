import React from 'react';
import SetsAndReps from './SetsAndReps';
import LowerBodyExercises from './LowerBodyExercises';
import UpperBodyExercises from './UpperBodyExercises';
import CardioExercises from './CardioExercises';

const lowerBodyExercises = ['Back Squats', 'Sumo Deadlifts', 'Goblet Squats', 'Romanian Deadlifts', 'Hip Thrusts', 'Calf Raises', 'Jump Squats', 'Lunges', 'Curtsy Lunges', 'Split Squat', 'Front Squat', 'Step Ups', 'Hamstring Curls', 'Leg Extension', 'Leg Press', 'Reverse Lunges']


class WorkoutTypes extends React.Component {
    
    constructor(props) {
        super(props); 
        this.state = {
            exercise: []
        }
    }
    
    render() {
        return(
            <div>
                <LowerBodyExercises />
                <UpperBodyExercises />
                <CardioExercises /> 
            </div>
        );
    }
    
    // _generateRandomExercises = () => {
    //     const exercisesGen = []
    //     const lowerBodyLength = 16;
    //     let i = 0;
    //     while (i < lowerBodyLength) {
    //         let rand = Math.floor(Math.random() * lowerBodyLength);
    //         if (lowerBodyExercises.indexOf(rand) === -1) {
    //             exercisesGen.push(rand);
    //         }
    //     }
    //     console.log(exercisesGen);
    // }


}

export default WorkoutTypes;