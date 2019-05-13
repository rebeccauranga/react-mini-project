import React from 'react';

const upperBodyExercises = ['Barbell Rows', 'Bicep Curls', 'Tricep Dips', 'Lat Pulldowns', 'Shoulder Press', 'Front Raises', 'Side Raises', 'Reverse Flys', 'Chest Press', 'Dumbbell Chest Press', 'Crazy 8s (Biceps)', 'Pull Ups', 'Push Ups', 'Arnold Presses', 'Face Plants']

function UpperBodyExercises(props) {
    return (
        <div>

            
             <ul>
            {props.upperExercises.map(ex => (
                <li>{upperBodyExercises[ex]}

                <button className={"done"}>Done</button>
                </li>

            ))}
           </ul>
        </div>
    );
}


export default UpperBodyExercises;