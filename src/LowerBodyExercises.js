import React from 'react';
import SetsAndReps from './SetsAndReps'

const lowerBodyExercises = ['Back Squats', 'Sumo Deadlifts', 'Goblet Squats', 'Romanian Deadlifts', 'Hip Thrusts', 'Calf Raises', 'Jump Squats', 'Lunges', 'Curtsy Lunges', 'Split Squat', 'Front Squat', 'Step Ups', 'Hamstring Curls', 'Leg Extension', 'Leg Press', 'Reverse Lunges']

function LowerBodyExercises(props) {
    return (
        <div>
            <button>Generate Lower Body Workout</button>
                {/* <h4>{this.state.lowerBodyWorkout}</h4> */}
                <SetsAndReps />
        </div>
    );
}

// _generateLowerBodyWorkout = () => {
//     const rand = lowerBodyExercises[Math.floor(Math.random() * lowerBodyExercises.length)];
//     console.log(rand)
//     this.setState({
//         lowerBodyWorkout: rand
//     });
// }

export default LowerBodyExercises;