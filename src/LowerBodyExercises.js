import React from 'react';
import SetsAndReps from './SetsAndReps'
import WorkoutTypes from './WorkoutTypes';


const lowerBodyExercises = ['Back Squats', 'Sumo Deadlifts', 'Goblet Squats', 'Romanian Deadlifts', 'Hip Thrusts', 'Jump Squats', 'Lunges', 'Curtsy Lunges', 'Split Squat', 'Front Squat', 'Step Ups', 'Hamstring Curls', 'Leg Extension', 'Leg Press', 'Reverse Lunges']


function LowerBodyExercises(props) {
    console.log(props.exercises);
    return (
        <div>
           <p>Generate Lower Body Workout</p>
           <ul>
            {props.exercises.map(ex => (
                <li>{lowerBodyExercises[ex]}</li>
            ))}
           </ul>
        </div>
    );
}
        
export default LowerBodyExercises;