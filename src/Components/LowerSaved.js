import React from 'react';



class LowerSaved extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        
        const lowerBodyExercises = ['Back Squats', 'Sumo Deadlifts', 'Goblet Squats', 'Romanian Deadlifts', 'Hip Thrusts', 'Jump Squats', 'Lunges', 'Curtsy Lunges', 'Split Squat', 'Front Squat', 'Step Ups', 'Hamstring Curls', 'Leg Extension', 'Leg Press', 'Reverse Lunges','Barbell Rows', 'Bicep Curls', 'Tricep Dips', 'Lat Pulldowns', 'Shoulder Press', 'Front Raises', 'Side Raises', 'Reverse Flys', 'Chest Press', 'Dumbbell Chest Press', 'Crazy 8s (Biceps)', 'Pull Ups', 'Push Ups', 'Arnold Presses', 'Face Plants','Sprints', 'Treadmill', 'StairMaster', 'Elliptical', 'Bike', 'Bike Sprints', 'Jump Squats', 'Burpees', 'Mountain Climbers', 'Skater Jumps', '180 Jump Squats', 'Elliptical Sprints', 'Frog Jumps', 'Swimming', 'Hiking'];
        const lowerWorkouts = localStorage.getItem('lowerExercises').split(',')
        const lowerarray = []
        const lowerparsed =  lowerWorkouts.forEach(num =>{
             lowerarray.push(parseInt(num))
        })
        console.log(lowerarray)
        const mappedArray = lowerarray.map (w => (
            <li key={w}>{lowerBodyExercises[w]}</li>
                    ))
        console.log(mappedArray)
        return (
            <div>
                <ul>
                    {mappedArray}
                </ul>
            </div>
        )
    }
}

export default LowerSaved