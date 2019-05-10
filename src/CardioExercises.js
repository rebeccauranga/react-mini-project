import React from 'react';

const cardio = ['Sprints', 'Treadmill', 'StairMaster', 'Elliptical', 'Bike', 'Bike Sprints', 'Jump Squats', 'Burpees', 'Mountain Climbers', 'Skater Jumps', '180 Jump Squats', 'Elliptical Sprints', 'Frog Jumps', 'Swimming', 'Hiking']

function CardioExercises() {
    return (
        <div>
            <button>Generate Cardio Workout</button>
        </div>
    );
}

// _generateCardio = () => {
//     const rand = cardio[Math.floor(Math.random() * cardio.length)];
//     console.log(rand)
//     this.setState({
//         cardio: rand
//     });
// }

export default CardioExercises;