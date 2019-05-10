import React from 'react';
import SetsAndReps from './SetsAndReps'


// length = 16

function LowerBodyExercises(props) {
    return (
        <div>
            <button onClick={generateRandomExercises}>Generate Lower Body Workout</button>
                {/* <h4>{this.state.lowerBodyWorkout}</h4> */}
                {/* <SetsAndReps /> */}
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
        
    function generateRandomExercises() {
        const lowerBodyExercises = ['Back Squats', 'Sumo Deadlifts', 'Goblet Squats', 'Romanian Deadlifts', 'Hip Thrusts', 'Calf Raises', 'Jump Squats', 'Lunges', 'Curtsy Lunges', 'Split Squat', 'Front Squat', 'Step Ups', 'Hamstring Curls', 'Leg Extension', 'Leg Press', 'Reverse Lunges']
        const exercisesGen = []
        const lowerBodyLength = 16;
        
        while (exercisesGen.length < 4) {
            const rand = Math.floor(Math.random() * lowerBodyLength);
            if (!exercisesGen.includes(rand)) {
                exercisesGen.push(rand); 
            } 
        }
        console.log(exercisesGen);
}

export default LowerBodyExercises;