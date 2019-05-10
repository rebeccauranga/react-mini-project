import React from 'react';

const upperBodyExercises = ['Barbell Rows', 'Bicep Curls', 'Tricep Dips', 'Lat Pulldowns', 'Shoulder Press', 'Front Raises', 'Side Raises', 'Reverse Flys', 'Chest Press', 'Dumbbell Chest Press', 'Crazy 8s (Biceps)', 'Pull Ups', 'Push Ups', 'Arnold Presses', 'Face Plants']

function UpperBodyExercises() {
    return (
        <div>
            <button>Generate Upper Body Workout</button>
        </div>
    );
}

// _generateUpperBodyWorkout = () => {
//     const rand = upperBodyExercises[Math.floor(Math.random() * upperBodyExercises.length)];
//     console.log(rand)
//     this.setState({
//         upperBodyWorkout: rand
//     });
// }

export default UpperBodyExercises;