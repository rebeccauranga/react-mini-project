import React from 'react';



const lowerBodyExercises = ['Back Squats', 'Sumo Deadlifts', 'Goblet Squats', 'Romanian Deadlifts', 'Hip Thrusts', 'Jump Squats', 'Lunges', 'Curtsy Lunges', 'Split Squat', 'Front Squat', 'Step Ups', 'Hamstring Curls', 'Leg Extension', 'Leg Press', 'Reverse Lunges']


function LowerBodyExercises(props) {
    console.log(props.exercises);
    return (
        <div>
           
           <ul>
            {props.lowerExercises.map(ex => (
                <li>
                {lowerBodyExercises[ex]}
                <button>Done</button>
                </li>
                
            ))}
           </ul>
        </div>
    );
}
        
export default LowerBodyExercises;