import React from 'react';



class UpperSaved extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const upperBodyExercises = ['Back Squats', 'Sumo Deadlifts', 'Goblet Squats', 'Romanian Deadlifts', 'Hip Thrusts', 'Jump Squats', 'Lunges', 'Curtsy Lunges', 'Split Squat', 'Front Squat', 'Step Ups', 'Hamstring Curls', 'Leg Extension', 'Leg Press', 'Reverse Lunges','Barbell Rows', 'Bicep Curls', 'Tricep Dips', 'Lat Pulldowns', 'Shoulder Press', 'Front Raises', 'Side Raises', 'Reverse Flys', 'Chest Press', 'Dumbbell Chest Press', 'Crazy 8s (Biceps)', 'Pull Ups', 'Push Ups', 'Arnold Presses', 'Face Plants','Sprints', 'Treadmill', 'StairMaster', 'Elliptical', 'Bike', 'Bike Sprints', 'Jump Squats', 'Burpees', 'Mountain Climbers', 'Skater Jumps', '180 Jump Squats', 'Elliptical Sprints', 'Frog Jumps', 'Swimming', 'Hiking'];
        const upperWorkouts = localStorage.getItem('upperExercises').split(',')
        const upperarray = []
        const upperparsed =  upperWorkouts.forEach(num =>{
             upperarray.push(parseInt(num)+15)
        })
        console.log(upperarray)
        return (
            <div>
               <ul>
                    {upperarray.map(w =>(
                        <li key={w}>{upperBodyExercises[w]}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default UpperSaved